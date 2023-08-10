"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
import { useState } from "react";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          image="/profileImages/1.jpg"
          username="Panithan Boonmapi 650610782"
          text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likes="100 คน"
        />

        {/* Comment Example */}
        <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริงค่า"
          likeNum="999 คน"
        />

        {/* Reply Example */}
        <Reply
          userImagePath="/profileImages/puppy.jpg"
          username="หมาน้อย"
          replyText="จริงค้าบบบบบบบบ"
          likeNum="2 คน"
        />

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
