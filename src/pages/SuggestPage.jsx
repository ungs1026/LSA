import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient.js';
import CryptoJS from 'crypto-js';

// 재사용 가능한 컴포넌트 (Pagination)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="pagination-container">
      {pages.map(page => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
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
    const [title, setTitle] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');
    const isEditMode = !!initialData;

    useEffect(() => {
        if (isOpen) {
            if (isEditMode) {
                setTitle(initialData.title);
                setNickname(initialData.author_nickname);
                setContent(initialData.content);
                setPassword('');
            } else {
                setTitle('');
                setNickname('');
                setPassword('');
                setContent('');
            }
        }
    }, [initialData, isOpen, isEditMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !nickname || !password || !content) {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        onSave({ title, author_nickname: nickname, password, content });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay active" onClick={onClose}>
            <div className="suggest-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close-btn" onClick={onClose}>&times;</span>
                <h2>{isEditMode ? '건의사항 수정' : '건의사항 작성'}</h2>
                <form onSubmit={handleSubmit} className="suggest-form">
                    <input type="text" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} required />
                    <div className="form-row">
                        <input type="text" placeholder="닉네임" value={nickname} onChange={e => setNickname(e.target.value)} required disabled={isEditMode} />
                        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <textarea placeholder="내용" value={content} onChange={e => setContent(e.target.value)} required />
                    <button type="submit" className="form-submit-btn">{isEditMode ? '수정하기' : '작성하기'}</button>
                </form>
            </div>
        </div>
    );
};

// 댓글 기능이 추가된 SuggestDetailModal
const SuggestDetailModal = ({ isOpen, onClose, suggestion, onEdit, onDelete, comments, onAddComment, onDeleteComment }) => {
    const [replyingTo, setReplyingTo] = useState(null);

    if (!isOpen || !suggestion) return null;

    const handleEdit = () => {
        const password = prompt('수정하려면 게시글 비밀번호를 입력하세요.');
        if (password) {
            const hashedInput = CryptoJS.MD5(password).toString();
            if (hashedInput === suggestion.password) {
                onEdit(suggestion);
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        }
    };

    const handleDelete = () => {
        const password = prompt('삭제하려면 게시글 비밀번호를 입력하세요.');
        if (password) {
            const hashedInput = CryptoJS.MD5(password).toString();
            if (hashedInput === suggestion.password) {
                if (window.confirm('정말로 게시글을 삭제하시겠습니까? 관련 댓글도 모두 삭제됩니다.')) {
                    onDelete(suggestion.id);
                }
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        }
    };
    
    const CommentThread = ({ parentId }) => {
        const filteredComments = comments.filter(c => c.parent_id === parentId);
        return (
            <div className={`comment-thread ${parentId ? 'reply-thread' : ''}`}>
                {filteredComments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-header">
                            <span className="comment-author">{comment.author_nickname}</span>
                            <span className="comment-date">{new Date(comment.created_at).toLocaleString()}</span>
                        </div>
                        <p className="comment-content">{comment.content}</p>
                        <div className="comment-actions">
                            <button onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}>
                                {replyingTo === comment.id ? '취소' : '답글 달기'}
                            </button>
                            <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
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

    const CommentForm = ({ suggestId, parentId = null, onAddComment, onCancel }) => {
        const [nickname, setNickname] = useState('');
        const [password, setPassword] = useState('');
        const [content, setContent] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!nickname || !password || !content) {
                alert('닉네임, 비밀번호, 내용을 모두 입력해주세요.');
                return;
            }
            onAddComment({
                suggest_id: suggestId,
                parent_id: parentId,
                author_nickname: nickname,
                password,
                content
            });
            setNickname('');
            setPassword('');
            setContent('');
            if (onCancel) onCancel();
        };
    
        return (
            <form onSubmit={handleSubmit} className={`comment-form ${parentId ? 'reply-form' : ''}`}>
                <textarea 
                    placeholder={parentId ? "답글을 입력하세요..." : "댓글을 입력하세요..."} 
                    value={content} 
                    onChange={e => setContent(e.target.value)} 
                    required 
                />
                <div className="comment-form-meta">
                    <input type="text" placeholder="닉네임" value={nickname} onChange={e => setNickname(e.target.value)} required />
                    <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    };

    return (
        <div className="modal-overlay active" onClick={onClose}>
            <div className="suggest-detail-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="detail-modal-header">
                    <span className="modal-close-btn" onClick={onClose}>&times;</span>
                    <div className="detail-modal-actions">
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                <div className="detail-modal-body">
                    <h2 className="detail-title">{suggestion.title}</h2>
                    <div className="detail-meta">
                        <span>Writer: {suggestion.author_nickname}</span>
                        <span>Date: {new Date(suggestion.created_at).toLocaleDateString()}</span>
                    </div>
                    <p className="detail-content">{suggestion.content}</p>
                    
                    <div className="comment-section">
                        <hr/>
                        <h4>Commnets ({comments.length})</h4>
                        <CommentThread parentId={null} />
                        <CommentForm suggestId={suggestion.id} onAddComment={onAddComment} />
                    </div>
                </div>
            </div>
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
    const itemsPerPage = 10;

    const fetchSuggestions = useCallback(async () => {
        setLoading(true);
        const from = (currentPage - 1) * itemsPerPage;
        const to = from + itemsPerPage - 1;

        const { data, error, count } = await supabase
            .from('suggest')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);

        if (error) {
            console.error('Error fetching suggestions:', error);
        } else {
            setSuggestions(data);
            setTotalPages(Math.ceil(count / itemsPerPage));
        }
        setLoading(false);
    }, [currentPage]);
    
    const fetchComments = async (suggestionId) => {
        if (!suggestionId) return;
        const { data, error } = await supabase
            .from('comment')
            .select('*')
            .eq('suggest_id', suggestionId)
            .order('created_at', { ascending: true });
        
        if (error) console.error('Error fetching comments:', error);
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
            const { error } = await supabase.from('suggest').update({ title: suggestionData.title, content: suggestionData.content, password: hashedPassword }).eq('id', editingSuggestion.id);
            if (error) alert(`수정 중 오류가 발생했습니다: ${error.message}`);
        } else {
            const { error } = await supabase.from('suggest').insert([{ ...suggestionData, password: hashedPassword }]);
            if (error) alert(`작성 중 오류가 발생했습니다: ${error.message}`);
        }
        
        setWriteModalOpen(false);
        setEditingSuggestion(null);
        fetchSuggestions();
    };

    const handleEdit = (suggestion) => {
        setDetailModalOpen(false);
        setEditingSuggestion(suggestion);
        setWriteModalOpen(true);
    };

    const handleDelete = async (id) => {
        const { error } = await supabase.from('suggest').delete().eq('id', id);
        if (error) alert(`삭제 중 오류가 발생했습니다: ${error.message}`);
        else {
            alert('삭제되었습니다.');
            setDetailModalOpen(false);
            fetchSuggestions();
        }
    };
    
    const handleAddComment = async (commentData) => {
        const { password, ...restData } = commentData;
        const hashedPassword = CryptoJS.MD5(password).toString();
        const { error } = await supabase.from('comment').insert([{...restData, password: hashedPassword}]);

        if (error) alert(`댓글 작성 중 오류가 발생했습니다: ${error.message}`);
        else await fetchComments(commentData.suggest_id);
    };

    const handleDeleteComment = async (commentId) => {
        const password = prompt('댓글을 삭제하려면 "게시글"의 비밀번호를 입력하세요.');
        if (password) {
            const hashedInput = CryptoJS.MD5(password).toString();
            if (hashedInput === selectedSuggestion.password) {
                const { error } = await supabase.from('comment').delete().eq('id', commentId);
                if (error) alert(`댓글 삭제 중 오류가 발생했습니다: ${error.message}`);
                else await fetchComments(selectedSuggestion.id);

            } else {
                alert('게시글의 비밀번호가 일치하지 않습니다.');
            }
        }
    };

    return (
        // suggest-page 클래스를 suggest-page-wrapper로 변경하고, 내부에 새 컨테이너 추가
        <div className="suggest-page-wrapper">
            <div className="suggest-page-container">
                <div className="page-header">
                    <h1>Sugget Board</h1>
                    <button className="write-btn" onClick={() => { setEditingSuggestion(null); setWriteModalOpen(true); }}>Write</button>
                </div>

                {loading ? <p>Loading...</p> : (
                    <div className="suggest-list-container">
                        <ul className="suggest-list">
                            {suggestions.map(s => (
                                <li key={s.id} onClick={() => handleOpenDetail(s)}>
                                    <span className="list-title">{s.title}</span>
                                    <span className="list-author">{s.author_nickname}</span>
                                    <span className="list-date">{new Date(s.created_at).toLocaleDateString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
            </div>

            <SuggestModal isOpen={isWriteModalOpen} onClose={() => setWriteModalOpen(false)} onSave={handleSaveSuggestion} initialData={editingSuggestion} />
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