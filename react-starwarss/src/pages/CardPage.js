import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { fetchData, fetchReset } from '../reduxHelper/fetchAction';
import Card from '../component/Card';
import Header from '../component/Header';
import Loader from '../component/Loader';
import NavBar from '../component/NavBar';

function CardPage(props) {
    const params = useParams();

    useEffect(() => {
        props.fetchData(params.type === 'characters' ? 'people' : params.type)
        return () => {
            console.log('unmount')
            props.fetchReset();
        }
    }, []);

    return (
        <div>
            <Header />
            <NavBar type={params.type} />
            {
                props.loading ? <Loader /> :
                    props.error ? <div> {props.error} </div> :
                        <main className='allCards'>
                            {
                                props.data && props.data.results &&
                                props.data.results.map(data => {
                                    const id = Number(data.url.slice(data.url.slice(0, data.url.lastIndexOf('/')).lastIndexOf('/') + 1, data.url.lastIndexOf('/')))
                                    return <Link to={`/${params.type}/${id}`} key={id}>
                                        <Card img={`${params.type}/${id}`} name={params.type === 'films' ? data.title : data.name} />
                                    </Link>
                                })
                            } </main>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        data: state.data,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (filter) => dispatch(fetchData(filter)),
        fetchReset: () => dispatch(fetchReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPage)