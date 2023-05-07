import React from 'react'
import "./blog.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { motion } from 'framer-motion' 


const oneblog = () =>{

}
const Blogpage = () => {
  




    const data = [
        {
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
         {
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
         {
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
         {
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        },
         {
            "img": "https://source.unsplash.com/600x400/?computer",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et."
        }
    ]
    return (
        <>
            <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600" }} className="">
                Blog
            </div>
            {/* <div className='verifypage'>
                <div className="container">
                    <motion.div
                        whileHover={{
                            scale: 0.95
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
                    <motion.div
                        whileHover={{
                            scale: 0.95
                        }} style={{ color: "black" }} className="card">
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor consequuntur optio, maiores totam ex ratione perspiciatis fugiat hic eos eveniet dolorem sit aspernatur
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
                </div>
            </div> */}
            <div className="verifypage">
                <div className="container">
                    {
                        data.map((item, idx) => {
                            return (
                                <motion.div
                                    whileHover={{
                                        scale: 0.95
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
            {/* <div

                style={{
                    display: "flex",
                    paddingTop: "1rem",
                    backgroundColor: "#ffffff",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                }}
            >
                <img
                    style={{
                        objectFit: "cover",
                        width: "60%",
                        height: "24rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                    }}
                    className="blogimg"
                    src="https://source.unsplash.com/600x400/?computer"
                    alt=""
                />
                <div style={{
                    display: "flex",
                    padding: "1rem",
                    lineHeight: "1.5",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                    <h5 style={{
                        marginBottom: "0.5rem",
                        color: "#111827",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        fontWeight: "700",
                        letterSpacing: "-0.025em",
                    }}>
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p style={{
                        marginBottom: "0.75rem",
                        color: "#374151",
                        fontWeight: "400",
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores dicta earum necessitatibus quis harum modi quod, sint nam dolore veniam blanditiis reprehenderit aliquid alias pariatur voluptates, explicabo repellat. Vel quas incidunt iste possimus ipsum fugit modi voluptate repudiandae voluptas et. Quas, similique aut! Animi laboriosam adipisci aspernatur nihil libero doloremque maxime cum sit officia dolorum blanditiis rerum optio eveniet autem ullam nobis inventore molestias atque voluptatem, sunt repellat impedit laborum alias nam. Quas qui a nostrum quia consequatur quod dolores voluptatem numquam, obcaecati, explicabo quibusdam, expedita autem possimus. Ipsum fuga voluptates quisquam ratione recusandae alias repellendus omnis ipsam officiis earum exercitationem deserunt consequatur, veritatis sunt dolorum molestiae? Dolorum quisquam laborum corrupti sint reiciendis. Quisquam, modi ab? Reprehenderit sed repellendus perferendis esse eos illum quos blanditiis dignissimos velit architecto amet commodi voluptatibus quasi in doloremque, nulla fuga labore. Temporibus ad vero nesciunt facilis, minus aperiam ducimus mollitia modi cum? Rem sunt nulla rerum cum, adipisci, veniam eius reiciendis sed pariatur maiores veritatis assumenda impedit enim, vel dolor temporibus repellat est! Harum, distinctio voluptatum labore deleniti a corporis, delectus voluptas eveniet veniam quas at molestias quod laudantium sequi error est. Qui maiores doloribus, quis fuga provident cupiditate officiis. Corporis tenetur quisquam sequi iure. Ducimus quibusdam perspiciatis iure praesentium autem. Impedit reiciendis omnis, fuga neque saepe ipsum architecto minus sit aut rerum aliquam eos ratione quis veniam incidunt quos quidem quo non tenetur quia deleniti. Accusantium impedit inventore laudantium vero consequuntur quisquam provident culpa ipsam nesciunt in reprehenderit nulla nemo laboriosam nihil rem odio perferendis, porro asperiores ab voluptate consectetur omnis, fugit obcaecati deleniti. Provident voluptate explicabo fugiat dolore fuga quaerat, alias sed pariatur sit? Ab sapiente provident expedita odio, accusamus ex blanditiis ducimus eaque quasi laborum hic velit culpa eum placeat aliquam error voluptatibus pariatur quibusdam? Obcaecati soluta tempora fugiat similique quis hic eveniet optio cupiditate delectus reprehenderit, distinctio ex at dolor cumque corporis aliquid nisi voluptates ducimus explicabo sint veritatis! Nulla fuga illo molestias atque ut porro consequuntur delectus libero iure veniam aperiam quaerat sapiente natus doloribus, veritatis ducimus sint animi, architecto inventore odit explicabo dolorum aliquid molestiae et? Qui quidem libero sit accusamus incidunt quas laborum quia, rerum minima blanditiis numquam reprehenderit autem dolor quisquam cumque earum repellendus cum neque fuga praesentium ipsa exercitationem voluptates! Obcaecati voluptatum animi temporibus porro ipsum cum at necessitatibus consectetur facere asperiores odio quisquam voluptate, aliquam ex eligendi quidem suscipit a tenetur odit illum reprehenderit? Ea doloremque modi natus voluptates sint, ratione ullam veritatis tenetur dolorum sequi eligendi sunt, unde, eius itaque. Quidem iusto consequatur a consectetur veniam magni necessitatibus ducimus voluptatibus temporibus optio voluptates nemo qui, quam labore doloremque, sit perferendis esse. Hic veniam deserunt excepturi recusandae cumque voluptatum neque iste, doloremque dignissimos eos unde natus sint provident deleniti explicabo incidunt aperiam consequuntur in quaerat minima tempora ab vitae! Ipsum dolorum totam nesciunt fugiat laborum nam beatae autem quidem temporibus provident neque, veniam facilis voluptatem molestias reiciendis veritatis, nihil optio nobis qui sequi sunt assumenda. Ducimus, quos nihil. Ratione non harum commodi perferendis.
                    </p>
                </div>
            </div> */}
        </>
    )
}

export default Blogpage