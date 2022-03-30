import React from "react";
import Axios from 'axios'

// components

import CardTableLight from "components/Cards/CardTableLight.js";
import CardTableDark from "components/Cards/CardTableDark.js";

// layout for page

import Admin4 from "layouts/Admin4";


export default function TablesDash({posts},{color}) {

  return (
    <>
    
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableDark posts={posts} color="dark"/>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableLight posts={posts} color="light" />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await Axios.get(`https://api.hubapi.com/cms/v3/hubdb/tables/5360731/rows?hapikey=${process.env.API_KEY}`);
  const posts = await res.data;
  const post = posts.total;
  JSON.stringify(posts);
  console.log(posts);
  console.log(post);

  return {
    props: {
      posts,
    },
  };
};



TablesDash.layout = Admin4;