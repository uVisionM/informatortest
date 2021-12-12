import { getFlipBook } from '@/ssg/flipbookcontent';
import { getFlipBookParser } from '@/ssg/flipbookparser';
import { test } from '@/ssg/test';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { FlipBook } from './flipbook';
import { HParser } from './parser'

const projectsPage = ({ content, contentparser, test }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
        <FlipBook pages={content}></FlipBook>
        <HParser pages={contentparser} test={test}/>
        </>
    );
};
export const getStaticProps = () => {
    return {
        props: {
            content: getFlipBook(),
            contentparser: getFlipBookParser(),
            test: test(),
        },
    };
};

export default projectsPage;