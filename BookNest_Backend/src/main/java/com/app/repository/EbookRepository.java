package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Ebook;

@Repository
public interface EbookRepository extends JpaRepository<Ebook, Long> {
}
