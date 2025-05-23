import { useNavigate } from "react-router-dom";

function Main({data}) {

    const navi = useNavigate();

    return (
        <>
            <main className="main-content">
                <section>
                    {/* <h2 className="section-title">검색 결과</h2> */}
                    <div className="movie-row">
                        {
                            data?.map((value) => (
                                <div key={value.id} className="movie-card" onClick={ ()=> navi(`/Detail/${value.id}`)}>
                                    <div className="movie-image">
                                        <img src={value.images[0]} alt={value.title} style={{width: "100%"}}/>
                                    </div>
                                    <div className="movie-info">
                                        <h3 className="movie-title">
                                            {value.title}
                                        </h3>
                                        <p className="movie-year">
                                            {value.meta.createdAt}
                                        </p>  
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
} 

export default Main;