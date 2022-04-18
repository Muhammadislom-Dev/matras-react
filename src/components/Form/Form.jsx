import './Form.scss'

const Form = ()=>{
    return(
        <div className="form">
            <div className="container">
                <div className='form__page mt-5 mb-5'>
                    <div>
                        <p className="form__name">Sizni qiziqtirdimi?</p>
                        <p className="form__text">Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
                    </div>
                    <div className='form__lists'>
                        <form className='form__list' >
                            <option value="">+998</option>
                            <input className='form__input' type="number" placeholder='Raqamingizni kiriting' />
                        </form>
                        <button type='submit' className='form__btn'>Yuborish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form