import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogDetail } from "../../redux/BlogDetailRedux";
import { useDispatch, useSelector } from "react-redux";
import MetaComponent from '../../components/MetaComponent';
import PageLoader from '../../components/PageLoader';

function BlogDetailComponent() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.BlogDetail);
  const { status } = useSelector((state) => state.BlogDetail);
  const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getBlogDetail({ url: params.id }));
    }
    }, [dispatch]);

    if (status === "loading") {
      return (
        <PageLoader/>
      );
    }

    if (status === "success") {
      var pageid = page.find(page => page.slug === params.id);
      console.log(pageid);
  }
  const cleanedDate = new Date().toDateString();
  
  return (
    <div className="BlogDetail">
        {status === "success" ? (
          <>
          <MetaComponent title={pageid.yoast_head_json.og_title} description={pageid.yoast_head_json.og_description}/>
          <div className="container">
            <div className="postHeader postHeaderMargin mt-5">
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <h1 className="postContentTitle">{pageid.title.rendered}</h1>
                  <span className="postedDate">{cleanedDate}</span>
                </div>
              </div>
            </div>
            <div
            dangerouslySetInnerHTML={{
              __html: pageid.content.rendered
            }} className="postContent"></div>
          </div>
          </>
        ) : null};
    </div>
  )
}

export default BlogDetailComponent;
