package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Navigation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nid;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uid")
    private SubscribedUser user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "eid")
    private Ebook ebook;

    private int pageNo;

    // Constructor
    public Navigation() {}

    public Navigation(SubscribedUser user, Ebook ebook, int pageNo) {
        this.user = user;
        this.ebook = ebook;
        this.pageNo = pageNo;
    }

	public Long getNid() {
		return nid;
	}

	public void setNid(Long nid) {
		this.nid = nid;
	}

	public SubscribedUser getUser() {
		return user;
	}

	public void setUser(SubscribedUser user) {
		this.user = user;
	}

	public Ebook getEbook() {
		return ebook;
	}

	public void setEbook(Ebook ebook) {
		this.ebook = ebook;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

    // Getters and setters
}
