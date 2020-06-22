class Sentemail extends React.Component {
  //マウント
  constructor (props) {
    //console.log('constructor')
    super(props)
    this.state = {　
      name: '',
      email: '',
      message: '',
      msg: ''
    }
  }
  
  componentWillMount () {
    //console.log('componentWillMount')
  }
  
  componentDidMount () {
    //console.log('componentDidMount')
  }
  
  //更新
  componentWillReceiveProprs (nextProps) {
    //console.log('componentWillReceivePropr')
  }
  
  shouldComponentUpdate (nextProps, nextStatus) {
    //console.log('shouldComponentUpdate')
    return true
  }
  
  componentWillUpadte () {
    //console.log('componentWillUpadte')
  }
  
  componentDidUpdate () {
    //console.log('componentDidUpdate')
  }
  
  //アンマウント
  componentWillUnmount () {
    //console.log('componentWillUnmount')
  }
  
  checkBlank (target) {
    const value = $(target).val()
    if (value != '') {
      $( target ).addClass('is-valid')
      $( target ).removeClass('is-invalid')
      return true
    }
    else {
      $( target ).addClass('is-invalid')
      $( target ).removeClass('is-valid')
      return false
    }
  }
  
  //値が変更されたとき
  doChangeName (e) {
    const newName = e.target.value
    this.setState({ name: newName })
    //console.log(newName);
    this.checkBlank(e.target)
  }
  
  doChangeEmail (e) {
    const newEmail = e.target.value
    this.setState({ email: newEmail })
    //console.log(newEmail);
    if (this.checkBlank(e.target) != false ) {
      this.checkValidation(newEmail, e.target)
    }
  }
  
  checkValidation (str, target) {
    const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
    if(str.match(pattern) === null ) {
      $( target ).addClass('is-invalid')
      $( target ).removeClass('is-valid')
      return false
    }
    else {
      return true
    }
  }
  
  checkBeforeSent () {
    const name = '#name'
    const email = '#email'
    const message = '#message'
    const str = $(email).val()
    
    if ( 
      this.checkBlank(name) === true && 
      this.checkBlank(email) === true && 
      this.checkBlank(message) === true &&
      this.checkValidation(str, email) === true 
    ) {
      return true
    }
    else if (
      this.checkBlank(name) != true && 
      this.checkBlank(email) != true && 
      this.checkBlank(message) != true &&
      this.checkValidation(str, email) != true
    ){
      this.setState({ msg: 'Email is incorrect. \n Please fill in all the items.' })
      return false
    }
    else if ( this.checkValidation(str, email) != true ) {
      this.setState({ msg: 'Email is incorrect.' })
      return false
    }
    else if ( 
      this.checkBlank(name) != true && 
      this.checkBlank(email) != true && 
      this.checkBlank(message) != true
    ) {
      this.setState({ msg: 'Please fill in all the items.' })
      return false
    }
    else {
      this.setState({ msg: 'Please fill in all the items.' })
      return false
    }
  }
  
  disAlert ( alertId ) {
    $(alertId).removeClass('nonalert')
    setTimeout(() => {
      $(alertId).addClass('nonalert')
    }, 5000);
  }
  
  doChangeMessage (e) {
    const newMessage = e.target.value
    this.setState({ message: newMessage })
    //console.log(newMessage);
    this.checkBlank(e.target)
  }
  
  doSubmit (e) {
    console.log('送信データ:', e);
    e.preventDefault()
    //Formの参照を取る
    if (this.checkBeforeSent() != true) {
      this.disAlert('#missEmail')
      console.log('Fail sent Email')
    }
    else {
      const body = '【sender】' + this.state.name + '\n【mail address】' + this.state.email +  '\n【message】\n'  + this.state.message 
      let flag = ''
      
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gettodowithallhaste9@gmail.com",
        Password : "B5F0EC81D6A025E3431E6ECF22885B36C033",
        To : 'gettodowithallhaste9@gmail.com',
        From : "gettodowithallhaste9@gmail.com",
        Subject : "＼(^o^)／R.Kawasaki Labからのご連絡です！！",
        Body : body
      }).then(
        message => console.log(message)
      );
      this.disAlert('#okEmail')
      console.log('Success sent Email')
      this.setState({ 
        name: '',
        email: '',
        message: '',
        msg: '',
      })
      $( '#name' ).removeClass('is-valid')
      $( '#email' ).removeClass('is-valid')
      $( '#message' ).removeClass('is-valid')
    }
  }
  
  render() {
    const doSubmit = (e) => this.doSubmit(e)
    const doChangeName = (e) => this.doChangeName(e)
    const doChangeEmail = (e) => this.doChangeEmail(e)
    const doChangeMessage = (e) => this.doChangeMessage(e)
    
    return (
      <form className="col-11 mx-auto" onSubmit={doSubmit}>
        <div className="alert nonalert alert-danger alert-dismissible fade show" role="alert" id="missEmail">
          <strong>Fail sent Email</strong> {this.state.msg}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="alert nonalert alert-success alert-dismissible fade show" role="alert" id="okEmail">
          <strong>Success sent Email</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="form-group text-left row mb-0 mb-sm-3">
          <label className="col-12 col-sm-2 col-htmlForm-label text-sm-right m-0" htmlFor="name">Your name</label>
          <input type="text" className="form-control col-12 col-sm-10" name="name" value={this.state.name} id="name" placeholder="your name" maxlenght="30" onChange={doChangeName}></input>
        </div>
        <div className="form-group text-left row mb-0 mb-sm-3">
          <label className="col-12 col-sm-2 col-form-label text-sm-right m-0" htmlFor="email">Email</label>
          <input type="email" className="form-control col-12 col-sm-10" name="email" value={this.state.email} id="email" placeholder="name@example.com" onChange={doChangeEmail}></input>
        </div>
        <div className="form-group text-left row mb-0 mb-sm-3">
          <label className="col-12 col-sm-2 col-form-label-sm text-sm-right" htmlFor="message">Message</label>
          <textarea className="form-control col-12 col-sm-10" name="message" id="message" value={this.state.message} rows="3" onChange={doChangeMessage}></textarea>
        </div>
        <div className="form-group row d-flex justify-content-center">
          <div className="cl-12 col-sm-4 my-3">
            <button type="submit" className="btn btn-block btn-primary" id="sentemail">送信</button>
          </div>
        </div>
      </form>
    )
  }
}

const DOM = <Sentemail />

//描写
ReactDOM.render(
  DOM,
  document.getElementById('mail')
);
