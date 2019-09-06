import React from 'react'
import { Link } from 'gatsby'
import { Card } from 'react-bootstrap'

const Post = ({ title, path, date }) => {
    return (
        <Card className="bg-transparent" style={{ border: `none`, paddingTop: `1em`, paddingBottom: `1em` }}>
            <span className="text-secondary">{date}</span>
            <Link to={path} className="text-primary" style={{ fontSize: `30px` }}>{title}</Link>
        </Card>
    )
}

export default Post