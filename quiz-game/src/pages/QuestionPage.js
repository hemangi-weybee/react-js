import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import Navbar from '../components/Navbar';
import Controller from '../components/Controller';
import Question from '../components/Question';
import StatusBar from '../components/StatusBar';
import { useQuestion } from '../helpers/questionHelper';
import selectAudio from '../assets/audio/click.mp3';

function QuestionPage(props) {
    const [play] = useSound(selectAudio);
    const navigate = useNavigate();

    const { data, setScore, answers, setAnswers, questionNo, prevQuestion, nextQuestion } = useQuestion()

    const [question, setQuestion] = useState(data[questionNo])
    const [givenAnswer, setGivenAnswer] = useState(answers[questionNo].answer)

    const modifyAnswer = (no, ans) => {
        setAnswers((answers) => answers.map(que => {
            if (que.id === no)
                return { ...que, answer: ans }
            return que
        }))
    }

    const optionHandler = (e) => {
        setGivenAnswer(e.target.value)
        modifyAnswer(question.id, e.target.value)
    }

    useEffect(() => {
        setQuestion(data[questionNo])
        setGivenAnswer(answers[questionNo].answer)
        if (answers[questionNo].answer.length === 0) document.querySelectorAll('[name="answer"]').forEach(btn => btn.disabled = false)
        if (answers[questionNo].answer.length > 0) document.querySelectorAll('[name="answer"]').forEach(btn => btn.disabled = true)
    }, [questionNo])

    const prevHandler = () => {
        if (questionNo === 0) return
        play()
        prevQuestion();
    }

    const nextHandler = () => {
        if (questionNo === data.length - 1) return
        play()
        nextQuestion()
    }

    const skipHandler = () => {
        if (questionNo === data.length - 1) return
        play()
        nextQuestion()
    }

    const width = () => {
        return ((questionNo + 1) * 100 / data.length) + '%'
    }

    const finishHandler = () => {
        const score = answers.reduce((acc, curr, i) => {
            if (curr.answer === data[i].answer) return acc + 1
            else return acc
        }, 0)
        play()
        setScore(score)
        props.context.suspend()
        navigate('/score', {replace: true})
    }

    return (
        <>
            <Navbar />

            <Question
                question={question}
                answer={givenAnswer}
                optionHandler={optionHandler} />

            <Controller
                last={questionNo === data.length - 1}
                prevDisable={questionNo === 0}
                nextDisable={!givenAnswer.length || questionNo === data.length - 1}
                finishHandler={finishHandler} skipHandler={skipHandler}
                nextHandler={nextHandler} prevHandler={prevHandler} />

            <StatusBar percent={width()} />
        </>
    )
}

export default React.memo(QuestionPage)