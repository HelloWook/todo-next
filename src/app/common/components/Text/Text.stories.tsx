import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextBold, SubHeading, Heading, LargeHeading } from './Text';

// Text 컴포넌트에 대한 메타데이터
const meta = {
    title: 'atoms/Text',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta;

export default meta;

// 기본 텍스트 컴포넌트 (Text)
type TextStory = StoryObj<typeof Text>;

export const DefaultText: TextStory = {
    name: '기본 텍스트',
    render: () => <Text>기본 16px 레귤러 텍스트입니다</Text>
};

// 볼드 텍스트 컴포넌트 (TextBold)
type TextBoldStory = StoryObj<typeof TextBold>;

export const BoldText: TextBoldStory = {
    name: '볼드 텍스트',
    render: () => <TextBold>16px 볼드 텍스트입니다</TextBold>
};

// 중간 크기 제목 컴포넌트 (SubHeading)
type SubHeadingStory = StoryObj<typeof SubHeading>;

export const DefaultSubHeading: SubHeadingStory = {
    name: '서브 헤딩',
    render: () => <SubHeading>18px 볼드 서브 헤딩입니다</SubHeading>
};

// 큰 제목 컴포넌트 (Heading)
type HeadingStory = StoryObj<typeof Heading>;

export const DefaultHeading: HeadingStory = {
    name: '헤딩',
    render: () => <Heading>20px 볼드 헤딩입니다</Heading>
};

// 더 큰 제목 컴포넌트 (LargeHeading)
type LargeHeadingStory = StoryObj<typeof LargeHeading>;

export const DefaultLargeHeading: LargeHeadingStory = {
    name: '대형 헤딩',
    render: () => <LargeHeading>XL 사이즈 볼드 대형 헤딩입니다</LargeHeading>
};
