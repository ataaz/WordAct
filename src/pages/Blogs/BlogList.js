import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { getBloglisting } from "../../redux/BlogListRedux";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from '../../components/PageLoader';

function Blogslisting() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Bloglisting);
  const { status } = useSelector((state) => state.Bloglisting);
  const params = useParams();


  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getBloglisting({ id: params.slug }));
    }
  }, [dispatch]);
  if (status === "loading") {
    return (
      <PageLoader/>
    );
  }

  if (status === "success") {
    // console.log(page);
  }

  return (
    <div className="BlogListing">
      <div className="container container1500">
        <h1>Blogs</h1>
        {/* Display data from API */}
        <div className="posts postsMargin row">
          {page &&
            page.map((page, index) => {
              const cleanedDate = new Date(page.date).toDateString();
              return (
                <div className="col-xl-4" key={index} data-aos="fade-in">
                  <div className="postBox">
                   <Link to={"/blogs/" + page.slug} className="postThumb">
                      <img src={page._embedded['wp:featuredmedia']['0'].source_url} alt=""></img>
                    </Link>
                    <Link to={"/blogs/" + page.slug} className="postTitle d-block">{page.title.rendered}</Link>
                    <div className="postDetails">
                      <div
                      dangerouslySetInnerHTML={{
                        __html: page.excerpt.rendered
                      }} className="postExcerpt"></div>
                      <Link to={"/blogs/" + page.slug} className="postReadmore d-block">Read more</Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default Blogslisting;
