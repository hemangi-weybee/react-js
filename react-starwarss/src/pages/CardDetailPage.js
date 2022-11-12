import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

import { fetchData, fetchReset } from '../reduxHelper/fetchAction';
import Header from '../component/Header';
import NavBar from '../component/NavBar';
import Loader from '../component/Loader';

function CardDetailPage(props) {

  const params = useParams();
  const [basicData, setBasicData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const [relatedDataTitle, setRelatedDataTitle] = useState([]);
  const [relatedDataLoadingFinish, setRelatedDataLoadingFinish] = useState(null)

  const getData = async function (url) {
    try {
      const response = await axios.get(url);
      if (!response.status) return null;
      return response.data;
    } catch (err) {
      console.warn(err);
    }
  }

  const getArrayData = async function (relatedDataUrl, category) {
    const result = [];
    try {
      for (let i = 0; i < relatedDataUrl.length; i++) {
        if (typeof (relatedDataUrl[i]) != 'object') {
          const data = relatedDataUrl[i] && await getData(relatedDataUrl[i]);
          result.push(data);
        }
      }
      setRelatedData(rd => [...rd, [category, result]])
      return result;
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    console.log(params)
    props.fetchData(params.type === `characters` ? `people/${params.id}` : `${params.type}/${params.id}`);
  }, [params.id, params.type]);

  useEffect(() => {
    setRelatedDataLoadingFinish(false)
    setBasicData([])
    setRelatedData([])
    setRelatedDataTitle([])

    if (props.data) {
      switch (params.type) {
        case 'characters': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'homeworld' && e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'name')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object') || (e[0] === 'homeworld')) return e
          })
          setRelatedDataTitle(temp.map(e => e[0] === 'homeworld' ? 'planets' : e[0]))
          temp && temp.forEach((r) => {
            if (r[1]) getArrayData([r[1]].flat(), r[0] === 'homeworld' ? 'planets' : r[0])
          });
          break;
        }

        case 'films': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'title')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object')) return e
          })
          setRelatedDataTitle(temp.map(e => e[0]))
          temp && temp.forEach(r => getArrayData([r[1]].flat(), r[0]));
          break;
        }

        case 'planets': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'name')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object')) return e
          });
          setRelatedDataTitle(temp.map(e => e[0] === 'residents' ? 'characters' : e[0]))
          temp && temp.forEach(r => getArrayData([r[1]].flat(), r[0] === 'residents' ? 'characters' : r[0]));
          break;
        }

        case 'starships': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'name')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object')) return e
          });
          setRelatedDataTitle(temp.map(e => e[0] === 'pilots' ? 'characters' : e[0]))
          temp && temp.forEach(r => getArrayData([r[1]].flat(), r[0] === 'pilots' ? 'characters' : r[0]));
          break;
        }

        case 'vehicles': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'name')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object')) return e
          });
          setRelatedDataTitle(temp.map(e => e[0] === 'pilots' ? 'characters' : e[0]))
          temp && temp.forEach(r => getArrayData([r[1]].flat(), r[0] === 'pilots' ? 'characters' : r[0]));
          break;
        }

        case 'species': {
          setBasicData(Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) !== 'object') && (e[0] !== 'homeworld' && e[0] !== 'created' && e[0] !== 'edited' && e[0] !== 'url' && e[0] !== 'name')) return e
          }));
          const temp = Object.entries(props.data) && Object.entries(props.data).filter((e) => {
            if ((typeof (e[1]) === 'object')) return e
          });
          setRelatedDataTitle(temp.map(e => e[0] === 'people' ? 'characters' : e[0] === 'homeworld' ? 'planets' : e[0]))
          temp && temp.forEach(r => getArrayData([r[1]].flat(), r[0] === 'people' ? 'characters' : r[0] === 'homeworld' ? 'planets' : r[0]));
          break;
        }
        default: { }
      }
    }
  }, [props.loading])

  useEffect(() => {
    relatedData.length === relatedDataTitle.length && setRelatedDataLoadingFinish(true)
  }, [relatedData])

  return (
    <div>
      <Header />
      <NavBar type={params.type} id={params.type === 'films' ? props.data.title : props.data.name} />
      {
        props.loading ? <Loader /> :
          props.error ? <div> {props.error} </div> :
            <main className='detailCard'>
              <div className='detailMain'>
                <div className='detailImg'>
                  <img src={`https://starwars-visualguide.com/assets/img/${params.type}/${params.id}.jpg`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                  />
                </div>
                <div className='details'>
                  <div className='detailTitle'>
                    <h2>{params.type === 'films' ? props.data.title : props.data.name}</h2>
                  </div>
                  <div className='basicDetails'>
                    {
                      basicData && basicData.map((e) => {
                        return (
                          <div className='detailRow' key={e[0]}>
                            <div className='detailHeading'> {e[0].split('_').join(' ')} : </div>
                            <span> {e[1]} </span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className='detailSub'>
                {
                  relatedDataLoadingFinish ?
                    relatedData.length && relatedData.map(r => {
                      return (
                        <div className='relatedDetail'>
                          <div className='relatedTitle'>Related {r[0]}</div>
                          <div className='relatedData'>
                            {
                              r && r[1].length ? r[1].map(e => {
                                if (e) {
                                  const id = Number(e.url.slice(e.url.slice(0, e.url.lastIndexOf('/')).lastIndexOf('/') + 1, e.url.lastIndexOf('/')));

                                  return (
                                    <Link to = {`/${r[0]}/${id}`}>
                                      <div className='relatedCard'>
                                        <img src={`https://starwars-visualguide.com/assets/img/${r[0]}/${id}.jpg`}
                                          onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                          }}
                                        />
                                        <span>{r[0] === 'films' ? e.title : e.name}</span>
                                      </div>
                                    </Link>
                                  )
                                }
                              }) : <div key={r[0]}><span> No related {r[0]} found</span></div>
                            }
                          </div>

                        </div>
                      )
                    })
                    : relatedDataTitle && relatedDataTitle.map(r => {
                      return (
                        <div className='relatedDetail'>
                          <div className='relatedTitle'>Related {r}</div>
                          <div className='relatedData'>
                            <Oval
                              height={40}
                              width={40}
                              color="#bd9314"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel='oval-loading'
                              secondaryColor="#bd9314"
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                            />
                          </div>
                        </div>
                      )
                    })
                }
              </div>
            </main>
      }
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailPage)