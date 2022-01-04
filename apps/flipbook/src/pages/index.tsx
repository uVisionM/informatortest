import { getFlipBook } from '@/ssg/flipbookcontent';
import { LParser } from '@/ssg/parser';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { FlipBook } from '../components/organism/flipbook';
import styled from '@emotion/styled';
import { Header }  from '../components/atoms/header'
import { Footer } from '../components/atoms/footer'
import { Socialmedia } from '../components/atoms/socialmedia';
import { Graduate } from '@/ssg/graduate';
import { getScienceContent } from '@/ssg/science';
import { HParser } from '../components/organism/parser';

const Napis: React.FC=({children}) => {
    return <div className="w-1/2 mt-16 mb-16 mx-auto bg-pbbg p-4 text-2xl text-center text-white ">{children}</div>
}

const projectsPage = ({ content, test, graduate, science }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Header></Header>
            <Napis>Informator dla maturzystów</Napis>
            <FlipBook pages={content} test={test} graduate={graduate} science={science}></FlipBook>
            <Napis>Kalkulator</Napis>
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
            graduate: Graduate(),
            science: getScienceContent(),
        },
    };
};

export default projectsPage;