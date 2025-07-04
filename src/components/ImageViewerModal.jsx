import React from 'react';

const ImageViewerModal = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleDownload = async (e) => {
    e.stopPropagation(); // 오버레이 클릭으로 모달이 닫히는 것을 방지
    try {
      // CORS 문제 발생 가능성이 낮은 fetch/blob 방식 사용
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // 파일 이름 설정 (URL에서 마지막 부분을 추출)
      const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1) || 'image.jpg';
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Image download failed:", error);
      // fetch 실패 시 (CORS 등) 새 탭에서 이미지 열기
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <span className="image-viewer-close-btn" onClick={onClose}>&times;</span>
      <button className="image-viewer-download-btn" onClick={handleDownload}>
        Download
      </button>
      <div className="image-viewer-content">
        <img src={imageUrl} alt="Fullscreen Character" onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
};

export default ImageViewerModal;