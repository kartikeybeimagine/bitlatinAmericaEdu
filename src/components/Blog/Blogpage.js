import React from 'react'
import "./blog.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Blogpage = () => {

    const navigate = useNavigate();
    const data = [
        {
            "id": 1,
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
        {
            "id": 2,
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
        {
            "id": 3,
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
        {
            "id": 4,
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
        {
            "id": 5,
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        }
    ]
    return (
        <>
            <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600" }} className="">
                Blog
            </div>
            <div className="verifypage">
                <div className="container">
                    {
                        data.map((item, idx) => {
                            return (
                                <motion.div
                                    whileHover={{
                                        scale: 0.95
                                    }}
                                    onClick={() => {
                                        navigate(`/blogs/${item.id}`);
                                    }}
                                    style={{ color: "black" }} className="card">
                                    <div className="card__header">
                                        <img
                                            src="https://source.unsplash.com/600x400/?computer"
                                            alt="card__image"
                                            className="card__image"
                                            width={600}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </div>
                                    <div className="card__body">
                                        <span className="tag tag-blue">Technology</span>
                                        <h4>What's new in 2022 Tech</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum magni voluptate dolor sed, molestiae quae! Officia rerum facilis perferendis dolorem esse molestiae non deserunt sapiente.
                                        </p>
                                        <h5 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Read More</h5>
                                    </div>
                                    <div style={{ color: "black" }} className="card__footer">
                                        <div className="user">
                                            <div className="user__info">
                                                <div style={{ display: "flex" }} className="space-x-2">
                                                    <AiOutlineHeart style={{ marginTop: "auto", marginBottom: "auto" }} />{"  "}
                                                    <h5 style={{ display: "flex", marginTop: "auto", marginBottom: "auto" }}>2</h5>
                                                </div>
                                                <small>2h ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blogpage