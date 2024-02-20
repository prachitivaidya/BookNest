package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.ManyToMany;
import javax.persistence.JoinTable;
import java.util.Set;

@Entity
public class Ebook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    private String name;
    private String author;
    private int numberOfPages;

    
    private String ebookContent;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "genre_id")
    private Genre genre;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_ebook",
        joinColumns = @JoinColumn(name = "ebook_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<SubscribedUser> subscribedUsers;

	public Ebook(Long bookId, String name, String author, int numberOfPages, String ebookContent, Genre genre,
			Set<SubscribedUser> subscribedUsers) {
		super();
		this.bookId = bookId;
		this.name = name;
		this.author = author;
		this.numberOfPages = numberOfPages;
		this.ebookContent = ebookContent;
		this.genre = genre;
		this.subscribedUsers = subscribedUsers;
	}

	public Ebook() {
		super();
	}

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
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

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public Set<SubscribedUser> getSubscribedUsers() {
		return subscribedUsers;
	}

	public void setSubscribedUsers(Set<SubscribedUser> subscribedUsers) {
		this.subscribedUsers = subscribedUsers;
	}
	

    // Constructors, getters, and setters
    
}
