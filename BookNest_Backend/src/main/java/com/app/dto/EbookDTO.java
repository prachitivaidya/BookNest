package com.app.dto;

public class EbookDTO {
							
    private String name;
    private String author;
    private int numberOfPages;
    private String ebookContent;
    private Long genreId; // ID of the genre
    
	public EbookDTO(String name, String author, int numberOfPages, String ebookContent, Long genreId) {
		super();
		this.name = name;
		this.author = author;
		this.numberOfPages = numberOfPages;
		this.ebookContent = ebookContent;
		this.genreId = genreId;
	}
	
	public EbookDTO() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getNumberOfPages() {
		return numberOfPages;
	}
	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}
	public String getEbookContent() {
		return ebookContent;
	}
	public void setEbookContent(String ebookContent) {
		this.ebookContent = ebookContent;
	}
	public Long getGenreId() {
		return genreId;
	}
	public void setGenreId(Long genreId) {
		this.genreId = genreId;
	}

    // Getters and setters
}