import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
// import spinner from './spinner'
import propTypes from 'prop-types'


export default class NewsComponent extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "A 'febrile' atmosphere - is football fan violence on rise?",
            "description": "As a report shows more arrests were made at football matches last year than the year before, BBC Sport hears from football fans about their experiences of attending matches.",
            "url": "http://www.bbc.co.uk/sport/football/64259799",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1391/production/_128290050_smoke_flare1_getty.jpg",
            "publishedAt": "2023-01-13T15:07:26.4449121Z",
            "content": "Manchester City were one of several clubs who were punished for pitch invasions last season\r\nThe father of a 15-year-old girl who was injured at a Carabao Cup match said behaviour of fans at football… [+8720 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Benjamin Mendy found not guilty of six counts of rape",
            "description": "The Manchester City footballer was accused of luring women to his home and sexually assaulting them.",
            "url": "http://www.bbc.co.uk/news/uk-england-manchester-63677581",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0E83/production/_115651730_breaking-promo-976.png",
            "publishedAt": "2023-01-13T12:52:20.0393718Z",
            "content": "Manchester City footballer Benjamin Mendy has been found not guilty of six counts of rape and one count of sexual assault at Chester Crown Court.\r\nJurors could not reach verdicts on one count of rape… [+1003 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Adam RittenbergESPN Senior Writer ",
            "title": "College football coaches make seven predictions for 2023",
            "description": "Coaches open up about what to expect across the college football landscape in 2023.",
            "url": "http://espn.go.com/college-football/insider/story/_/id/35427645/college-football-coaches-make-seven-predictions-2023",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0113%2Fr1117013_1296x729_16%2D9.jpg",
            "publishedAt": "2023-01-13T12:00:00Z",
            "content": "There's a natural inclination to always look ahead in college football, especially at a time when the movement of players and coaches is fast and furious.\r\nThe 2022 season wrapped up Monday night, as… [+17563 chars]"
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "Paul Collins",
            "title": "Every clash I had with George Pell made me wish I had the umpire’s whistle",
            "description": "I first met Pell on the football field in the early 1960s. He was a ruckman – a good footballer, but very rough – and I was the umpire. I awarded quite a few free kicks against him.",
            "url": "https://www.smh.com.au/national/every-clash-i-had-with-george-pell-made-me-wish-i-had-the-umpire-s-whistle-20230112-p5cc7v.html",
            "urlToImage": "https://static.ffx.io/images/$zoom_3.268518518518518%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_914%2C$y_0/t_crop_custom/q_86%2Cf_auto/t_smh_opinion_no_age_social_wm/1ea63ac08aca539b8fecf953dbda21978548cc2b",
            "publishedAt": "2023-01-13T04:30:00+00:00",
            "content": "Over the years in several books, I argued for a humbler church that engaged with the world and with the preoccupations of secular Australia. This led to George and I often being protagonists in the m… [+3107 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Ryan Dabbs",
            "title": "Lionel Messi equals another record after scoring for PSG in first game back since World Cup triumph",
            "description": "It's only a matter of time until the Argentine breaks every record available in football",
            "url": "https://www.fourfourtwo.com/news/lionel-messi-equals-another-record-after-scoring-for-psg-in-first-game-back-since-world-cup-triumph",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/DDf8NB9r2oyKaKmyG25iQA-1200-80.jpg",
            "publishedAt": "2023-01-12T11:45:24Z",
            "content": "Seemingly, there's not a game that goes by without Lionel Messi matching or breaking yet another record, and, in his first game back for Paris Saint-Germain after winning World Cup 2022, the Argentin… [+1776 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "genarel"
    }
    static propTypes = {
        country: propTypes.string,
        pagesize: propTypes.number,
        category: propTypes.string

    }


    constructor() {
        super()
        console.log("this is the consstructor from component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    // async updatenews() {
    //     // console.log("cdm");
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eda48768b9314eee8cbf2ee6c2078f9b&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    //     let data = await fetch(url)
    //     let passdata = await data.json()
    //     // console.log(passdata);
    //     // console.log(this.state.page)
    //     this.setState({ articles: passdata.articles, totalResults: passdata.totalResults })


    // }
    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eda48768b9314eee8cbf2ee6c2078f9b&page=1&pageSize=${this.props.pagesize}`;
        let data = await fetch(url)
        let passdata = await data.json()
        // console.log(passdata);
        console.log(this.state.page)
        this.setState({ articles: passdata.articles, totalResults: passdata.totalResults })
        // this.updatenews()

    }

    PrevPage = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eda48768b9314eee8cbf2ee6c2078f9b&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        let passdata = await data.json()
        // console.log(passdata);
        console.log(this.state.page)
        this.setState({
            articles: passdata.articles,
            page: this.state.page - 1
        })

        // this.setState({ page: this.state.page - 1 })
        // console.log(this.state.page)
        // this.updatenews()


    }
    NextPage = async () => {
        console.log("next")


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eda48768b9314eee8cbf2ee6c2078f9b&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        let passdata = await data.json()
        // console.log(passdata);
        console.log(this.state.page)
        this.setState({
            articles: passdata.articles,
            page: this.state.page + 1
        })

        // this.setState({ page: this.state.page + 1 })
        // console.log(this.state.page)
        // this.updatenews()




    }


    render() {
        // {console.log("render")}
        return (

            <div className='container my-3 '>
                <h2 style={{ fontFamily: 'Rubik', marginTop: "5rem", color: "azure" }}>NewsMonkey<span id="headline" style={{ color: "red", fontFamily: 'Rubik' }}> Headlines</span></h2>
                {this.state.loading && <Spinner />}


                <div className="row my=2">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 40) : ""} img_url={element.urlToImage}
                                news_url={element.url} author={element.author ? element.author : "Unknown"} time={new Date(element.publishedAt).toDateString()} Source={element.source.name} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between my-2">


                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.PrevPage} > &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.NextPage}>Next &rarr; </button>
                </div>


            </div>
        )
    }
}
