import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../supabaseClient.js";
import CryptoJS from "crypto-js";
import YouTube from "react-youtube";

// 재사용 가능한 컴포넌트 (Pagination)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="pagination-container">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${
            currentPage === page ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

// 재사용 가능한 컴포넌트 (SuggestModal)
const SuggestModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const isEditMode = !!initialData;

  useEffect(() => {
    if (isOpen) {
      if (isEditMode) {
        setTitle(initialData.title);
        setNickname(initialData.author_nickname);
        setContent(initialData.content);
        setPassword("");
      } else {
        setTitle("");
        setNickname("");
        setPassword("");
        setContent("");
      }
    }
  }, [initialData, isOpen, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !nickname || !password || !content) {
      alert("Please enter all items.");
      return;
    }
    onSave({ title, author_nickname: nickname, password, content });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="suggest-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="modal-close-btn" onClick={onClose}>
          ×
        </span>
        <h2>{isEditMode ? "Edit" : "Write"}</h2>
        <form onSubmit={handleSubmit} className="suggest-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="form-row">
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              disabled={isEditMode}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className="form-submit-btn">
            {isEditMode ? "Edit" : "Write"}
          </button>
        </form>
      </div>
    </div>
  );
};

// 댓글 기능이 추가된 SuggestDetailModal
const SuggestDetailModal = ({
  isOpen,
  onClose,
  suggestion,
  onEdit,
  onDelete,
  comments,
  onAddComment,
  onDeleteComment,
}) => {
  const [replyingTo, setReplyingTo] = useState(null);

  if (!isOpen || !suggestion) return null;

  const handleEdit = () => {
    const password = prompt("Please enter your post password to modify it.");
    if (password) {
      const hashedInput = CryptoJS.MD5(password).toString();
      if (hashedInput === suggestion.password) {
        onEdit(suggestion);
      } else {
        alert("Password doesn't match.");
      }
    }
  };

  const handleDelete = () => {
    const password = prompt("Please enter your post password to remove it.");
    if (password) {
      const hashedInput = CryptoJS.MD5(password).toString();
      if (hashedInput === suggestion.password) {
        if (
          window.confirm(
            "Are you sure you want to delete the post? All relevant comments will be deleted as well."
          )
        ) {
          onDelete(suggestion.id);
        }
      } else {
        alert("Password doesn't match.");
      }
    }
  };

  const CommentThread = ({ parentId }) => {
    const filteredComments = comments.filter((c) => c.parent_id === parentId);
    return (
      <div className={`comment-thread ${parentId ? "reply-thread" : ""}`}>
        {filteredComments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="comment-header">
              <span className="comment-author">{comment.author_nickname}</span>
              <span className="comment-date">
                {new Date(comment.created_at).toLocaleString()}
              </span>
            </div>
            <p className="comment-content">{comment.content}</p>
            <div className="comment-actions">
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
              >
                {replyingTo === comment.id ? "취소" : "답글 달기"}
              </button>
              <button onClick={() => onDeleteComment(comment.id)}>삭제</button>
            </div>
            {replyingTo === comment.id && (
              <CommentForm
                suggestId={suggestion.id}
                parentId={comment.id}
                onAddComment={onAddComment}
                onCancel={() => setReplyingTo(null)}
              />
            )}
            <CommentThread parentId={comment.id} />
          </div>
        ))}
      </div>
    );
  };

  const CommentForm = ({
    suggestId,
    parentId = null,
    onAddComment,
    onCancel,
  }) => {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!nickname || !password || !content) {
        alert("Please enter your nickname, password, and content.");
        return;
      }
      onAddComment({
        suggest_id: suggestId,
        parent_id: parentId,
        author_nickname: nickname,
        password,
        content,
      });
      setNickname("");
      setPassword("");
      setContent("");
      if (onCancel) onCancel();
    };

    return (
      <form
        onSubmit={handleSubmit}
        className={`comment-form ${parentId ? "reply-form" : ""}`}
      >
        <textarea
          placeholder={
            parentId ? "Please enter your reply..." : "Please type in the comments..."
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div>
          <div className="comment-form-meta">
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="comment_modal_btn" type="submit">Submit</button>
        </div>
      </form>
    );
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="suggest-detail-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="detail-modal-header">
          <span className="modal-close-btn" onClick={onClose}>
            ×
          </span>
          <div className="detail-modal-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className="detail-modal-body">
          <h2 className="detail-title">{suggestion.title}</h2>
          <div className="detail-meta">
            <span>Writer: {suggestion.author_nickname}</span>
            <span>
              Date: {new Date(suggestion.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="detail-content">{suggestion.content}</p>

          <div className="comment-section">
            <hr />
            <h4>Comments ({comments.length})</h4>
            <CommentThread parentId={null} />
            <CommentForm
              suggestId={suggestion.id}
              onAddComment={onAddComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. 시계 관련 로직을 별도 컴포넌트로 분리 ---
const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="live-clock">
            {currentTime.toLocaleString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
        </div>
    );
};

// 메인 페이지 컴포넌트
const SuggestPage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isWriteModalOpen, setWriteModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [editingSuggestion, setEditingSuggestion] = useState(null);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  const youtubeVideoId = "jOvTuiwLcuI";

  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const fetchSuggestions = useCallback(async () => {
    setLoading(true);
    const from = (currentPage - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    let query = supabase.from("suggest").select("*", { count: "exact" });

    if (searchQuery) {
      query = query.ilike(searchType, `%${searchQuery}%`);
    }

    query = query.order("created_at", { ascending: false }).range(from, to);

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching suggestions:", error);
      alert(`Error fetching data: ${error.message}`);
    } else {
      setSuggestions(data);
      setTotalPages(Math.ceil(count / itemsPerPage));
    }
    setLoading(false);
  }, [currentPage, searchQuery, searchType]);

  const fetchComments = async (suggestionId) => {
    if (!suggestionId) return;
    const { data, error } = await supabase
      .from("comment")
      .select("*")
      .eq("suggest_id", suggestionId)
      .order("created_at", { ascending: true });

    if (error) console.error("Error fetching comments:", error);
    else setComments(data || []);
  };

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  const handleOpenDetail = async (suggestion) => {
    setSelectedSuggestion(suggestion);
    await fetchComments(suggestion.id);
    setDetailModalOpen(true);
  };

  const handleSaveSuggestion = async (suggestionData) => {
    const hashedPassword = CryptoJS.MD5(suggestionData.password).toString();

    if (editingSuggestion) {
      const { error } = await supabase
        .from("suggest")
        .update({
          title: suggestionData.title,
          content: suggestionData.content,
          password: hashedPassword,
        })
        .eq("id", editingSuggestion.id);
      if (error) alert(`An error occurred during correction: ${error.message}`);
    } else {
      const { error } = await supabase
        .from("suggest")
        .insert([{ ...suggestionData, password: hashedPassword }]);
      if (error) alert(`Error creating: ${error.message}`);
    }

    setWriteModalOpen(false);
    setEditingSuggestion(null);
    if (currentPage === 1) {
      fetchSuggestions();
    } else {
      setCurrentPage(1);
    }
  };

  const handleEdit = (suggestion) => {
    setDetailModalOpen(false);
    setEditingSuggestion(suggestion);
    setWriteModalOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("suggest").delete().eq("id", id);
    if (error) alert(`Error deleting: ${error.message}`);
    else {
      alert("삭제되었습니다.");
      setDetailModalOpen(false);
      fetchSuggestions();
    }
  };

  const handleAddComment = async (commentData) => {
    const { password, ...restData } = commentData;
    const hashedPassword = CryptoJS.MD5(password).toString();
    const { error } = await supabase
      .from("comment")
      .insert([{ ...restData, password: hashedPassword }]);

    if (error) alert(`Error writing comments: ${error.message}`);
    else await fetchComments(commentData.suggest_id);
  };

  const handleDeleteComment = async (commentId) => {
    const password = prompt(
      'To delete the comment, enter the password for the "post".'
    );
    if (password) {
      const hashedInput = CryptoJS.MD5(password).toString();
      if (hashedInput === selectedSuggestion.password) {
        const { error } = await supabase
          .from("comment")
          .delete()
          .eq("id", commentId);
        if (error) alert(`Error deleting comments: ${error.message}`);
        else await fetchComments(selectedSuggestion.id);
      } else {
        alert("The password in the post does not match.");
      }
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchQuery(searchTerm);
  };

  const youtubePlayerOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: youtubeVideoId,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      playsinline: 1,
      disablekb: 1,
    },
  };

  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.playVideo();
  };

  return (
    <div className="suggest-page-wrapper">
      <div className="youtube-background">
        <YouTube
          videoId={youtubeVideoId}
          opts={youtubePlayerOptions}
          onReady={onPlayerReady}
          className="youtube-iframe"
        />
      </div>

      <div
        className={`suggest-page-container ${isMinimized ? "minimized" : ""}`}
      >
        <div className="window-header">
          {/* 3. 분리된 LiveClock 컴포넌트 사용 */}
          <LiveClock />
          <div className="window-controls">
            <button onClick={toggleMinimize} className="minimize-btn">
              {isMinimized ? "🗖" : "—"}
            </button>
          </div>
        </div>

        <div className="board-content">
          <div className="page-header">
            <h1>Suggest Board</h1>
            <button
              className="write-btn"
              onClick={() => {
                setEditingSuggestion(null);
                setWriteModalOpen(true);
              }}
            >
              Write
            </button>
          </div>
          <div className={`suggest-list-container ${loading ? "loading" : ""}`}>
            {loading && <div className="loading-spinner"></div>}
            <ul className="suggest-list">
              {suggestions.map((s) => (
                <li key={s.id} onClick={() => handleOpenDetail(s)}>
                  <span className="list-title">{s.title}</span>
                  <div>
                    <span className="list-author">{s.author_nickname}</span>
                    <span className="list-date">
                      {new Date(s.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <div className="search-bar-container">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="search-select"
            >
              <option value="title">Title</option>
              <option value="author_nickname">Writer</option>
            </select>
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
      </div>

      <SuggestModal
        isOpen={isWriteModalOpen}
        onClose={() => setWriteModalOpen(false)}
        onSave={handleSaveSuggestion}
        initialData={editingSuggestion}
      />
      <SuggestDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        suggestion={selectedSuggestion}
        comments={comments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
      />
    </div>
  );
};

export default SuggestPage;