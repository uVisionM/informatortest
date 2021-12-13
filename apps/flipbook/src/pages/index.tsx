import { getFlipBook } from '@/ssg/flipbookcontent';
import { LParser } from '@/ssg/parser';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { FlipBook } from './flipbook';
import { HParser } from './parser'
import styled from '@emotion/styled';
import { Header }  from './header'
import { Footer } from './footer'
import { Socialmedia } from './socialmedia';

const Napis = styled.div`
    width:50%;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background-color: #012404;
    color: white;
    font-family: sans-serif;
    font-size: 24px;
    text-align:center;
    padding: 10px;
`
const projectsPage = ({ content, test }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Header></Header>
            <Napis>Informator</Napis>
            <FlipBook pages={content}></FlipBook>
            <Napis>Przelicz swoje punkty !</Napis>
            <HParser test={test} />
            <Napis>Sprawdź nas!</Napis>
            <Socialmedia></Socialmedia>
            <Footer></Footer>
        </div>
        
    );
};
export const getStaticProps = () => {
    return {
        props: {
            content: getFlipBook(),
            test: LParser(),
        },
    };
};

export default projectsPage;