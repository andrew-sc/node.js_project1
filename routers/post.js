const express = require("express");
const Post = require("../schemas/post");
const allPost = require("../schemas/all_post");

const router = express.Router();


// 요구


//     전체 포스트를 불러오는 기능-완
// 제목, 작성자명, 작성날짜 보여주기
// 날짜기준 내림차순
// 게시글에 링크필요(클릭시 조회페이지)
router.get("/main", async(req, res) => {
    try{
        const posts = await Post.find({}).sort({"postTime": -1})
        res.json({ posts: posts })
    } catch (err) {
        console.error(err);
    }
})

//     각 포스트 작성페이지-완
// 제목, 작성자명, 비밀번호, 내용 입력
// 글쓰기 버튼 > 게시글 목록조회 페이지 + 작성게시물이 1번으로 도출

router.post("/post/add", async(req, res, next) => {
    const { title, writer, pw, contents, postTime } = await req.body;
    //console.log(title, writer, pw, contents, postTime)

    await Post.create({ title, writer, pw, contents, postTime });
    res.send({result : "success"})
})



//     포스트 상세페이지
// 제목, 작성자명, 날짜, 작성 내용을 띄워줌

//     포스트 수정기능
// 수정하기 클릭시 원래 값 유지상태로 도출
// 비밀번호 비워두기
// 수정완료btn 삭제하기btn
// 비밀번호 비교 후 동일할 때만 실행

//     포스트 삭제기능
// 비밀번호 비교 후 동일할 때만 실행

//구현?
//      검색기능

module.exports = router;