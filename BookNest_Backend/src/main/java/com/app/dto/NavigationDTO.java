package com.app.dto;

public class NavigationDTO {
    private Long userId;
    private Long ebookId;
    private int pageNo;
	public NavigationDTO(Long userId, Long ebookId, int pageNo) {
		super();
		this.userId = userId;
		this.ebookId = ebookId;
		this.pageNo = pageNo;
	}
	public NavigationDTO() {
		super();
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getEbookId() {
		return ebookId;
	}
	public void setEbookId(Long ebookId) {
		this.ebookId = ebookId;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

    // Constructors, getters, and setters
}
