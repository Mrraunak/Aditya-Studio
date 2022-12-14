import React/*, {useState }*/ from 'react'


const Blogs = (props) => {
    // const [blogs, setBlogs] = useState(props.allBlogs);
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/blogs').then((a) => {
    //         return a.json();
    //     })
    //         .then((parsed) => {
    //             setBlogs(parsed)
    //         })
    // }, [])
    return (
        <>
            <div className="mx-auto my-1"></div>

            <div className="bodyStyle1">

                <div className="bodyStyle2">

                    <div className="bodyStyle3">

                    </div>

                </div>

            </div>

            <div className="overflow-x-hidden bg-gray-100">

                <div className="px-6 py-8">

                    <div className="container flex justify-between mx-auto">

                        <div className="w-full lg:w-8/12">

                            <div className="flex items-center justify-between">

                                <h1 className="text-2xl font-bold text-gray-700 md:text-3xl px-8">AadiSharma Blog</h1>

                            </div>

                            <div className="infinite-scroll-component__outerdiv">

                                <div className="infinite-scroll-component bodyStyle4">

                                    {/* {blogs.map((blogItem) => { */}
                                        {/* return  */}<div /*key={blogItem.title}*/ className="mt-6">

                                            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">

                                                <div className="flex items-center justify-between"><span className="font-light text-gray-600">"blogitem.date"</span></div>

                                                <div className="mt-2"> <span className="text-2xl font-bold text-gray-700"><a href=''
                                                >""</a></span>

                                                    <p className="mt-2 text-gray-600">"blogItem.desc"</p>

                                                </div>

                                                <div className="flex items-center justify-between mt-4 text-purple-900"><a href=''>Read

                                                    more</a></div>

                                            </div>

                                        </div>
                                    {/* })} */}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};


// export async function getStaticProps(context) {
//     let data = await fs.promises.readdir("blogdata");
//     let myfile;
//     let allBlogdata = [];
//     for (let index = 0; index < data.length; index++) {
//         const item = data[index];
//         myfile = await fs.promises.readFile(('Blogdata/' + item), 'utf-8')
//         allBlogdata.push(JSON.parse(myfile))
//     }
//     res.status(200).json(allBlogdata)
//     return {
//       props: {allBlogs}, // will be passed to the page component as props
//     }
//   }

export default Blogs;