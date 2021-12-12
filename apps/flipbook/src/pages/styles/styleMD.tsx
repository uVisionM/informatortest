import styled from '@emotion/styled';

const MarkdownComponent = styled.div`
    width: 100%;
    text-align: justify;
    padding-top: 10px;
    border-top: solid 1px #f2e8d9;
    h1 {
        color: #00610b;
        font-size: 1.875rem;
        font-weight: bold;
    }
    h2 {
        color: #00610b;
        font-size: 1.5rem;
        font-weight: bold;
    }
    h3 {
        color: #00610b;
        font-size: 1.25rem;
        font-weight: bold;
    }
    h4 {
        color: #00610b;
        font-size: 1.125rem;
        font-weight: bold;
    }
    h5 {
        color: #00610b;
        font-size: 1rem;
        font-weight: bold;
    }
    h6 {
        color: #00610b;
        font-size: 0.75rem;
        font-weight: bold;
    }
    p {
        color: #292929;
        font-size: large;
        & > img {
            margin: 0 auto;
            padding-top: 2rem;
        }
    }
    figcaption {
        justify-content: center;
        display: flex;
        padding-bottom: 2rem;
    }
    blockquote {
        margin: 1.6rem 0.8rem;
        padding-left: 2rem;
        background: #f6f6f6;
        border-left: 4px solid #00610b;
    }
    table {
        border-style: solid;
        border-color: #00610b;
        border-width: 4px;
        margin: 0 auto;
        & > thead > tr {
            border-color: #00610b;
            border-width: 4px;
            & > th {
                border-color: #00610b;
                border-width: 2px;
            }
        }
        & > tbody > tr {
            border-width: 2px 0px 0px 0px;
            border-color: #00610b;
        }
        & > tbody > tr > td {
            border-width: 0 2px 0;
            border-color: #00610b;
        }
    }
    pre {
        background: #f6f6f6;
        padding: 1rem;
    }
    ul {
        padding: 1rem 2rem;
        font-family: inherit;
    }
    li::marker {
        content: '•';
        color: #00610b;
    }
    li {
        padding-left: 0.5rem;
        & > p {
            display: inline-block;
        }
        & > ul {
            padding: 0 1rem;
            & > li::marker {
                content: '○';
                color: #00610b;
            }
        }
    }
    ol {
        padding: 1rem 2rem;
        & > li {
            counter-increment: li;
            & > ol {
                padding: 0 1rem;
            }
        }
        & > li::marker {
            content: counter(li);
            color: #00610b;
        }
    }
`;

export const MarkdownContentPages: React.FC = ({ children }) => {
    return <MarkdownComponent>{children}</MarkdownComponent>;
};

export default MarkdownContentPages;
