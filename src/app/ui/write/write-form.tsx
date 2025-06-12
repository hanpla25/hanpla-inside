"use client";

import React from "react";

export default function WriteForm() {
  return (
    <div>
      <form className="border border-gray-300">
        <div className="flex border-b border-gray-300 px-2">
          <label htmlFor="nickname" className="sr-only">
            닉네임
          </label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임"
            className="border-r border-r-gray-300 w-full py-2 text-blue-800"
            defaultValue={"ㅇㅇ"}
          />
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            className="w-full px-2 py-2"
          />
        </div>
        <div className="border-b border-gray-300">
          <label htmlFor="title" className="sr-only">
            제목
          </label>
          <input
            name="title"
            id="title"
            className="w-full  resize-none px-2 py-2"
            placeholder="제목을 입력해주세요."
          ></input>
        </div>
        <textarea
          name="text"
          id="text"
          rows={10}
          className="w-full resize-none px-2 py-2 border-b border-gray-300 overflow-hidden"
          placeholder="내용"
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        ></textarea>
        <div className="flex justify-end p-2">
          <button className="bg-[#3b4890] px-2.5 py-1 text-white">등록</button>
        </div>
      </form>
    </div>
  );
}
