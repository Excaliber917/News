import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, img_url, news_url, author, time, Source } = this.props
        return (
            <div>
                <div className="card my-2 h-100 shadow-lg p-1 bg-body rounded" style={{ width: "18rem" }}>
                    <img src={!img_url ? "https://media.istockphoto.com/id/1206575314/vector/image-unavailable-icon.jpg?s=612x612&w=0&k=20&c=7aypXCTzJ42V0xRHJ08Nq1K6fPgY5IB_D4fXbWloX_w=" : img_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{Source}</span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <a href={news_url} target="_blank" className="btn btn-sm btn-info btn-dark">Read More</a>
                        <p className="card-text"><small className="text-muted">by {author},{time}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
