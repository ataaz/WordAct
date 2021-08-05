import React from "react";
import MetaComponent from '../../components/MetaComponent';
import Bloglisting from './BlogList';

function BlogsPage() {
  return (
    <div className="Blogs PaddingTopHeding SingleURL">
      <MetaComponent title="Blogs" description="this is blog listing page"/>
      <Bloglisting />
    </div>
  );
}

export default BlogsPage;