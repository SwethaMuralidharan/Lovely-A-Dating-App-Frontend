import React, {Component} from 'react';
import Options from './options';
import Priority from './priority';

class Test extends Component{
  constructor(){
    super();
    this.state={
      values : {
                humour:[0,0,0,0,0],
                intelligence:[0,0,0,0,0],
                empathy:[0,0,0,0,0],
                materialism:[0,0,0,0,0],
                physical_needs:[0,0,0,0,0]
              },
              humour: '',
              intelligence: '',
              empathy:'',
              materialism: '',
              physical_needs: ''

  }
    this.logAnswer=this.logAnswer.bind(this);
    this.onTestSubmit=this.onTestSubmit.bind(this);
    this.saveUserPriority=this.saveUserPriority.bind(this);
  }
  logAnswer(categ,idx,value){
    let clonedValues = Object.assign({}, this.state.values);
    clonedValues[categ][idx] = value;
    this.setState({values: clonedValues});
  }
  onTestSubmit(e){
    e.preventDefault();
    var data = [];
    for (var key in this.state.values) {
    if (this.state.values.hasOwnProperty(key)) {
        data.push({name  : key,
                   score :  parseInt(this.state.values[key][0],10) + parseInt(this.state.values[key][1],10) + parseInt(this.state.values[key][2],10) + parseInt(this.state.values[key][3],10) + parseInt(this.state.values[key][4],10),
                   priority:parseInt(this.state[key],10)
                  });
      }
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.props.user_id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: data
        })
      }).then((res) => {
         return res.json()
        }).then((json) => {
           console.log(json);
        })

  };

  saveUserPriority(cat1,cat2,cat3,cat4,cat5){
    this.setState({
      humour : cat1,
      intelligence :cat2,
      empathy:cat3,
      materialism:cat4,
      physical_needs:cat5
    })

  }
  render(){
    return (
      <div className="form-outline">
      <Priority onSave={this.saveUserPriority}/>
      <h4 className="headerpad">Take the survey</h4>
      <form>
        <div>
          <div>
            <label className="statement"> A sense of humor is a must . </label>
            <fieldset>
                <Options categ={'humour'} idx={'0'} qnSet={'Q1'} onAnswerChoose={this.logAnswer}/>
            </fieldset>

          </div>
          <div>
              <label className="statement"> Laughter is the best medicine. </label>
              <fieldset>
                  <Options categ={'humour'} idx={'1'} qnSet={'Q2'} onAnswerChoose={this.logAnswer}/>
              </fieldset>

          </div>
          <div>
            <label className="statement"> I want to date someone that knows how to make me laugh. </label>
            <Options categ={'humour'} idx={'2'} qnSet={'Q3'} onAnswerChoose={this.logAnswer}/>
          </div>
         <div>
            <label className="statement"> I’m funny, and I like funny people . </label>
            <Options categ={'humour'} idx={'3'} qnSet={'Q4'} onAnswerChoose={this.logAnswer}/>
          </div>
          <div>
            <label className="statement"> Its always a good time for a joke  . </label>
            <Options categ={'humour'} idx={'4'} qnSet={'Q5'} onAnswerChoose={this.logAnswer}/>
          </div>
      </div>

      <br />

      <div>
          <div>
            <label className="statement"> I want to date a smart person. </label>
            <Options categ={'intelligence'} idx={'0'} qnSet={'Q6'} onAnswerChoose={this.logAnswer} />
          </div>
          <div>
            <label className="statement"> A beautiful mind is a terrible thing to waste . </label>
            <Options categ={'intelligence'} idx={'1'} qnSet={'Q7'} onAnswerChoose={this.logAnswer} />
          </div>
          <div>
            <label className="statement"> Intelligence is a valuable resource to society. </label>
            <Options categ={'intelligence'} idx={'2'} qnSet={'Q8'} onAnswerChoose={this.logAnswer} />
          </div>
          <div>
            <label className="statement"> I find smart people attractive. </label>
            <Options categ={'intelligence'} idx={'3'} qnSet={'Q9'} onAnswerChoose={this.logAnswer} />
          </div>
          <div>
            <label className="statement"> Intelligent conversation draws me to want to get to know someone more. </label>
            <Options categ={'intelligence'} idx={'4'} qnSet={'Q10'} onAnswerChoose={this.logAnswer} />
          </div>
      </div>

      <br />

      <div>
          <div>
            <label className="statement"> People’s feelings matter. </label>
            <Options categ={'empathy'} idx={'0'} qnSet={'Q11'} onAnswerChoose={this.logAnswer} />
          </div>
         <div>
           <label className="statement"> Sometimes doing good for others is worth it even if you lose out because of it . </label>
           <Options categ={'empathy'} idx={'1'} qnSet={'Q12'} onAnswerChoose={this.logAnswer} />
         </div>
         <div>
           <label className="statement"> When I see people less fortunate, it makes me sad. </label>
           <Options categ={'empathy'} idx={'2'} qnSet={'Q13'} onAnswerChoose={this.logAnswer} />
         </div>
         <div>
           <label className="statement"> I want to help the world . </label>
           <Options categ={'empathy'} idx={'3'} qnSet={'Q14'} onAnswerChoose={this.logAnswer} />
         </div>
         <div>
           <label className="statement"> I can’t stand to see suffering. </label>
           <Options categ={'empathy'} idx={'4'} qnSet={'Q15'} onAnswerChoose={this.logAnswer} />
         </div>
      </div>

      <br />

      <div>
         <div>
           <label className="statement"> Life is greatly enhanced by the comforts that money can buy . </label>
           <Options categ={'materialism'} idx={'0'} qnSet={'Q16'} onAnswerChoose={this.logAnswer} />
         </div>
        <div>
           <label className="statement"> I need to have certain possessions or I don’t feel like myself . </label>
           <Options categ={'materialism'} idx={'1'} qnSet={'Q17'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
           <label className="statement"> Paying the bills is not enough, I want to make new bills! </label>
           <Options categ={'materialism'} idx={'2'} qnSet={'Q18'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
           <label className="statement"> I love having the latest thing, especially if it is expensive . </label>
           <Options categ={'materialism'} idx={'3'} qnSet={'Q19'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
           <label className="statement"> You can tell someone’s status by their lifestyle. </label>
           <Options categ={'materialism'} idx={'4'} qnSet={'Q20'} onAnswerChoose={this.logAnswer} />
        </div>
      </div>

      <br />

      <div>
        <div>
            <label className="statement"> If my partner and I are not intimate as often as I prefer, I will find another relationship  </label>
            <Options categ={'physical_needs'} idx={'0'} qnSet={'Q21'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
            <label className="statement"> Words are not enough, I need touch . </label>
            <Options categ={'physical_needs'} idx={'1'} qnSet={'Q22'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
            <label className="statement"> If our sex life doesn’t do well, the rest of the relationship probably won’t either </label>
            <Options categ={'physical_needs'} idx={'2'} qnSet={'Q23'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
            <label className="statement"> I am looking for sex more than a lasting relationship. </label>
            <Options categ={'physical_needs'} idx={'3'} qnSet={'Q24'} onAnswerChoose={this.logAnswer} />
        </div>
        <div>
            <label className="statement"> I want my partner to want me physically. </label>
            <Options categ={'physical_needs'} idx={'4'} qnSet={'Q25'} onAnswerChoose={this.logAnswer} />
        </div>
      </div>
      <div className="buttons">
         <button data-dismiss="modal" onClick={this.onTestSubmit}>Submit</button>
      </div>
 </form>
</div>

    )
  }
}

export default Test
