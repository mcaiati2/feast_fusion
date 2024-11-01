function AuthForm(propsObj: { isLogin: boolean }) {
    return (
        <>
            <main id="authForm">
                <section className="row formStyle">
                    <form className="col-4 mx-auto">
                        <h2 className="text-center">{propsObj.isLogin ? 'Sign In' : 'Sign Up'}</h2>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div className="form-text">Feast Fusion would never share your password with anyone.</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Stay logged in?</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default AuthForm;