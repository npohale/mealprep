import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3 bg-warning text-white'>
            <h3 className='display-4'>{currentCategory} Cusines</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <Link className="p-2 text-muted" to='/category/chineese'>Chineese</Link>
                    <Link className="p-2 text-muted" to='/category/filipino'>Filipino</Link>
                    <Link className="p-2 text-muted" to='/category/mexican'>Mexican</Link>
                    <Link className="p-2 text-muted" to='/category/american'>American</Link>
                    <Link className="p-2 text-muted" to='/category/easteuropean'>Eastern European</Link>
                    <Link className="p-2 text-muted" to='/category/turkish'>Turkish</Link>
                    <Link className="p-2 text-muted" to='/category/indian'>Indian</Link>
                    <Link className="p-2 text-muted" to='/category/italian'>Italian</Link>
                    <Link className="p-2 text-muted" to='/category/japaneese'>Japaneese</Link>
                    <Link className="p-2 text-muted" to='/category/superfoods'>Superfoods</Link>
                    <Link className="p-2 text-muted" to='/category/gourmet'>Gourmet</Link>
                    <Link className="p-2 text-muted" to='/category/cheap'>Dirt Cheap!!</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;
