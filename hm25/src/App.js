import React, { Component } from 'react';
import stickers1 from './components/image/stickers1.png';
import stickers2 from './components/image/stickers2.png';
import stickers3 from './components/image/stickers3.png';
import stickers4 from './components/image/stickers4.png';
import stickers5 from './components/image/stickers5.png';
import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';

const stickers = [stickers1, stickers2, stickers3, stickers4, stickers5];

// Сохранение данных в Local Storage
const saveVotesToLocalStorage = (votes) => {
    localStorage.setItem('votes', JSON.stringify(votes));
};

// Получение данных из Local Storage
const getVotesFromLocalStorage = () => {
    const savedVotes = localStorage.getItem('votes');
    return savedVotes ? JSON.parse(savedVotes) : [0, 0, 0, 0, 0];
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: getVotesFromLocalStorage(),
            showResults: false,
        };
    }

    handleClick = (event) => {
        const dataIndex = event.currentTarget.getAttribute('data-index');
        this.countResult(dataIndex);
    }

    countResult = (dataIndex) => {
        const index = parseInt(dataIndex);
        const newVotes = [...this.state.votes];
        newVotes[index] += 1;
        this.setState({ votes: newVotes }, () => {
            saveVotesToLocalStorage(this.state.votes);
        });
    }

    cleanResult = () => {
        const resetVotes = [0, 0, 0, 0, 0];
        this.setState({ votes: resetVotes, showResults: false }, () => {
            saveVotesToLocalStorage(this.state.votes);
        });
    }

    showResultsHandler = () => {
        this.setState({ showResults: true });
    }

    render() {
        const { votes, showResults } = this.state;
        const winnerIndex = votes.indexOf(Math.max(...votes));

        return (
            <div className="App">
                <Title text={'Voting for the best emoticon!'} type={'primary'} />
                <div className={'voting-area'}>
                    {stickers.map((sticker, index) => (
                        <React.Fragment key={index}>
                            <Button onClick={this.handleClick} type={'image'} image={sticker} dataIndex={index.toString()} />
                            <Title text={votes[index]} type={'result'} />
                        </React.Fragment>
                    ))}
                </div>
                <Button text={'Show Results'} type={'none'} onClick={this.showResultsHandler} dataIndex={'show-results'} />
                <Button text={'Clean Results'} type={'none'} onClick={this.cleanResult} dataIndex={'clean-results'} />
                {showResults && (
                    <>
                        <Title text={'Voting results!'} type={'secondary'} />
                        <Title
                            text={`Winner: Sticker ${winnerIndex + 1}`}
                            type={'image'}
                            image={stickers[winnerIndex]}
                        />
                        <Title text={`Number of votes: ${votes[winnerIndex]}`} type={'result'} />
                    </>
                )}
            </div>
        );
    }
}

export default App;
