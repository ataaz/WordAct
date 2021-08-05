import MetaComponent from '../../components/MetaComponent';
import Intro from './Intro';
import { getAboutpage } from "../../redux/AboutpageRedux";
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PageLoader from '../../components/PageLoader';

function About() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Aboutpage);
  const { status } = useSelector((state) => state.Aboutpage);
  const params = useParams();

  useEffect(() => {
  ////Passing page ID reference
  if (status !== "success") {
    dispatch(getAboutpage({ params }));
  }
  }, [dispatch]);

  if (status === "loading") {
    return (
      <PageLoader/>
    );
  }

  if (status === "success") {
}

return (
    <div className="About PaddingTopHeding DoubleURL">
        {status === "success" ? (
          <>
          <MetaComponent title={page.yoast_head_json.og_title} description={page.yoast_head_json.og_description}/>
          <Intro />
          </>
        ) : null};
    </div>
  )
}

export default About;