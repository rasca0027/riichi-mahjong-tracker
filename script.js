var $ = function(id) { return document.getElementById( id ); };
var playerNum = 4;
var score = [25000,25000,25000,25000];
var scoreReduced = [0,0,0,0];
var scoreToBeginWith = [25000,25000,25000,25000];
var scoreToChangeAfterGame = [0,0,0,0];
var scoreRequiredToEnd = 30000;
var scoreRequiredToFinishEarly = 30000;
var standardScore = 30000;
var topReward = 20;
var scoreRequiredToContinue = 0;
var gameAmount = 8; // 4=東風 8=半莊
var calcScoreRule = 0; // 0=通常 1=青天井
var nagashiManganTakesPointsOnTable = false;
var roundUpMangan = false;
var nagashiThreeRon = true;
var addExtraGames = true;
var winEnoughFinishEarly = false;
var scoreToBeginWithDifferent = false;
var wrongRonCalcAfterGame = false;
var wrongRonReduceOnly = false;
var wrongRonPenaltyFixed = false;
var isDealerWinContinue = 1; // 1聽牌
var lastDealerTopEndRule = 1; // 1結束 0聽牌續行 -1續行
var roundType = -1; // 1四捨五入 2五捨六入 -1 不採用
var scoreOrderAdjustAmount = [20,10,-10,-20];
var nagashiPtTotal = 3000;
var wrongRonPtTotal = 8000;
var bonusPtPerGame = 300;
var scoreChange = [0,0,0,0];
var scoreOnTable = 0;
var winds = ["東", "南", "西", "北"];
var whoIndicator = ["↑","←","↓","→"];
var eFan = $("fan");
var eFu = $("fu");
var eScoreResult = $("scoreResult");

var eTopRiichiBtn = $("topRiichiBtn");
var eLeftRiichiBtn = $("leftRiichiBtn");
var eBottomRiichiBtn = $("bottomRiichiBtn");
var eRightRiichiBtn = $("rightRiichiBtn");
var eRiichiBtns = [eTopRiichiBtn, eLeftRiichiBtn, eBottomRiichiBtn, eRightRiichiBtn];

var eTopScore = $("topScore");
var eLeftScore = $("leftScore");
var eBottomScore = $("bottomScore");
var eRightScore = $("rightScore");
var eScoreDivs = [eTopScore, eLeftScore, eBottomScore, eRightScore];

var eTopWind = $("topWind");
var eLeftWind = $("leftWind");
var eBottomWind = $("bottomWind");
var eRightWind = $("rightWind");
var eWindDivs = [eTopWind, eLeftWind, eBottomWind, eRightWind];

var eWindInfo = $("windInfo");
var eRiichiAmount = $("riichiAmount");
var eOkBtn = $("okBtn");


var eTopTsumoBtn = $("topTsumoBtn");
var eLeftTsumoBtn = $("leftTsumoBtn");
var eBottomTsumoBtn = $("bottomTsumoBtn");
var eRightTsumoBtn = $("rightTsumoBtn");
var eTsumoBtns = [eTopTsumoBtn, eLeftTsumoBtn, eBottomTsumoBtn, eRightTsumoBtn];

var eTopRonBtn = $("topRonBtn");
var eLeftRonBtn = $("leftRonBtn");
var eBottomRonBtn = $("bottomRonBtn");
var eRightRonBtn = $("rightRonBtn");
var eRonBtns = [eTopRonBtn, eLeftRonBtn, eBottomRonBtn, eRightRonBtn];

var eTopChuckBtn = $("topChuckBtn");
var eLeftChuckBtn = $("leftChuckBtn");
var eBottomChuckBtn = $("bottomChuckBtn");
var eRightChuckBtn = $("rightChuckBtn");
var eChuckBtns = [eTopChuckBtn, eLeftChuckBtn, eBottomChuckBtn, eRightChuckBtn];

var eSelectTopScoreDiv = $("selectTopScore");
var eSelectLeftScoreDiv = $("selectLeftScore");
var eSelectBottomScoreDiv = $("selectBottomScore");
var eSelectRightScoreDiv = $("selectRightScore");
var eSelectScoreDivs = [eSelectTopScoreDiv, eSelectLeftScoreDiv, eSelectBottomScoreDiv, eSelectRightScoreDiv];

var eSelectNagashiListenerDiv = $("selectNagashiListener");
var eTopListenBtn = $("topListenBtn");
var eLeftListenBtn = $("leftListenBtn");
var eBottomListenBtn = $("bottomListenBtn");
var eRightListenBtn = $("rightListenBtn");
var eListenBtns = [eTopListenBtn, eLeftListenBtn, eBottomListenBtn, eRightListenBtn];

var eSelectNagashiManganerDiv = $("selectNagashiManganer");
var eTopNagashiManganBtn = $("topNagashiManganBtn");
var eLeftNagashiManganBtn = $("leftNagashiManganBtn");
var eBottomNagashiManganBtn = $("bottomNagashiManganBtn");
var eRightNagashiManganBtn = $("rightNagashiManganBtn");
var eNagashiManganBtns = [eTopNagashiManganBtn, eLeftNagashiManganBtn, eBottomNagashiManganBtn, eRightNagashiManganBtn];


var eSelectNagashiEarlyFinishTypeDiv = $("selectNagashiEarlyFinishType");
var eEarlyNagashiNightTails = $("earlyNagashiNightTails");
var eEarlyNagashiFourRiichis = $("earlyNagashiFourRiichis");
var eEarlyNagashiThreeRons = $("earlyNagashiThreeRons");
var eEarlyNagashiFourKangs = $("earlyNagashiFourKangs");
var eEarlyNagashiFourWinds = $("earlyNagashiFourWinds");
var eEarlyNagashiTypeBtns = [eEarlyNagashiNightTails, eEarlyNagashiFourRiichis, eEarlyNagashiThreeRons, eEarlyNagashiFourKangs, eEarlyNagashiFourWinds];

var eSelectNagashiTypeDiv = $("selectNagashiType");
var eNormalNagashiBtn = $("normalNagashiBtn");
var eEarlyNagashiBtn = $("earlyNagashiBtn");
var eManganNagashiBtn = $("manganNagashiBtn");
var eNagashiTypeBtns = [eNormalNagashiBtn, eEarlyNagashiBtn, eManganNagashiBtn];
var eNagashiTypeDivs = [eSelectNagashiListenerDiv, eSelectNagashiEarlyFinishTypeDiv, eSelectNagashiManganerDiv];
var eNagashiDetailSelectorInTypeDivs = [eListenBtns, eEarlyNagashiTypeBtns, eNagashiManganBtns];

var eScoreChangeTopDiv = $("scoreChangeTop");
var eScoreChangeLeftDiv = $("scoreChangeLeft");
var eScoreChangeBottomDiv = $("scoreChangeBottom");
var eScoreChangeRightDiv = $("scoreChangeRight");
var eScoreChangeDivs = [eScoreChangeTopDiv, eScoreChangeLeftDiv, eScoreChangeBottomDiv, eScoreChangeRightDiv];

var eSelectRonerDiv = $("selectRoner");
var eSelectTsumoerDiv = $("selectTsumoer");
var eSelectChuckerDiv = $("selectChucker");

var eSelectSpecialTypeDiv = $("selectSpecialType");
var eReduceSpecialBtn = $("reduceSpecialBtn");
var eWrongRonSpecialBtn = $("wrongRonSpecialBtn");
var eSelectSpecialTypeBtns = [eReduceSpecialBtn, eWrongRonSpecialBtn];

var eSelectReducedPlayerDiv = $("selectReducedPlayer");
var eTopReducedBtn = $("topReducedBtn");
var eLeftReducedBtn = $("leftReducedBtn");
var eBottomReducedBtn = $("bottomReducedBtn");
var eRightReducedBtn = $("rightReducedBtn");
var eSelectReducedPlayerBtns = [eTopReducedBtn, eLeftReducedBtn, eBottomReducedBtn, eRightReducedBtn];

var eSelectWrongRonPlayerDiv = $("selectWrongRonPlayer");
var eTopWrongRonBtn = $("topWrongRonBtn");
var eLeftWrongRonBtn = $("leftWrongRonBtn");
var eBottomWrongRonBtn = $("bottomWrongRonBtn");
var eRightWrongRonBtn = $("rightWrongRonBtn");
var eSelectWrongRonPlayerBtns = [eTopWrongRonBtn, eLeftWrongRonBtn, eBottomWrongRonBtn, eRightWrongRonBtn];

var eScoreAdjustTop = $("scoreAdjustTop");
var eScoreAdjustSecond = $("scoreAdjustSecond");
var eScoreAdjustThird = $("scoreAdjustThird");
var eScoreAdjustLast = $("scoreAdjustLast");
var eScoreAdjustAmounts = [eScoreAdjustTop, eScoreAdjustSecond, eScoreAdjustThird, eScoreAdjustLast];

var eSelectSpecialTypeDivs = [eSelectReducedPlayerDiv, eSelectWrongRonPlayerDiv];
var eDetailSelectorInSpecialTypeDivs = [eSelectReducedPlayerBtns, eSelectWrongRonPlayerBtns];

var eScoreToBeginWithDivs = [$("scoreToBeginWithTop"),$("scoreToBeginWithLeft"),$("scoreToBeginWithBottom"),$("scoreToBeginWithRight")]

var eSelectTsumoScoreDiv = $("selectTsumoScore");
var eCalcScorePanel = $("calcScorePanel");
var eSettingPanel = $("settingPanel");
var eDetailPanel = $("detailPanel");
var eConfirmBtn = $("confirmBtn");
var eCancelBtn = $("cancelBtn");
var eReturnBtn = $("returnBtn");
var eMask1 = $("mask1");
var eSelectableButtonsOnMask1 = [eRonBtns, eTsumoBtns, eChuckBtns, eListenBtns, eNagashiManganBtns];
var eDivsOnMask1 = [eSelectRonerDiv, eSelectTsumoerDiv, eSelectChuckerDiv, eSelectNagashiTypeDiv, eSelectNagashiListenerDiv, eSelectNagashiManganerDiv, eSelectNagashiEarlyFinishTypeDiv, eSelectTsumoScoreDiv, eSelectBottomScoreDiv, eSelectLeftScoreDiv, eSelectRightScoreDiv, eSelectTopScoreDiv, eSelectSpecialTypeDiv, eSelectReducedPlayerDiv, eSelectWrongRonPlayerDiv, eSettingPanel, eCancelBtn, eConfirmBtn, eCalcScorePanel];

var eResetBtn = $("resetBtn");
var eRollbackBtn = $("rollbackBtn");
var eSettingBtn = $("settingBtn");
var eResultNagashiBtn = $("nagashiBtn");
var eResultRonBtn = $("ronBtn");
var eResultTsumoBtn = $("tsumoBtn");
var eResultSpecialBtn = $("specialBtn");
var eDetailBtn = $("detailBtn");

var eFunctionBtns = [eResetBtn, eRollbackBtn, eSettingBtn, eDetailBtn];
var eResultBtns = [eResultNagashiBtn, eResultRonBtn, eResultTsumoBtn, eResultSpecialBtn];

var startDealer = 4;
var dealer = 4;
var gameId = [0, 0];
var gameLog = [];
/* [東一局0本場 25000 25000 25000 25000]
    [            -1000 -1000            ]
    [            -3900       +3900      ]
    [東一局1本場 .......................]
*/
var scenario = "";
var isWinnerDealer = false;
var isAllLast = false;
var endGameFlag = false;
var scoreOnTableTakenFlag = false;
var fieldName = ["東一","東二","東三","東四","南一","南二","南三","南四","西一","西二","西三","西四"];

var signed = function(num) {
  if(num > 0) return "+"+num;
  return num;
};

var setDealer = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(!e.classList.contains("dealer"))	e.classList.add("dealer");
};

var removeDealer = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if( e.classList.contains("dealer"))	e.classList.remove("dealer");
};

var refreshDealer = function() {
  for(var i = 0 ; i <= 3 ; i++) {
    if(dealer % 4 == i) setDealer(eWindDivs[i]);
    else removeDealer(eWindDivs[i]);
  }
};

var resetBtnClicked = function() {
  //再確認一次是否要reset
  var resetConfirmValue = confirm("確定要重來嗎?");
      if( resetConfirmValue == true ) resetField();
};

var resetField = function() {
  score = [scoreToBeginWith[0],scoreToBeginWith[1],scoreToBeginWith[2],scoreToBeginWith[3]];
  scoreChange = [0,0,0,0];
  scoreReduced = [0,0,0,0];
  scoreOnTable = 0;
  gameId = [0,0];
  dealer = startDealer;
  eDetailPanel.innerHTML = "";
  isWinnerDealer = false;
  isAllLast = false;
  endGameFlag = false;
  unselectElementsIn(eRiichiBtns);
  refreshFieldSituation();
  refreshDealer();
  gameLog = [];
  gameLog.push([fieldName[gameId[0]]+"局"+gameId[1]+"本場", score[0], score[1], score[2], score[3], 0, 0, 0, dealer, 0, 0, 0, 0]);
  hideElement(eRollbackBtn);
};

var rollbackBtnClicked = function() {
  if(gameLog.length > 1) {
    gameLog.pop();
    gameLog.pop();
    gameLog.pop();
    var temp = gameLog.pop();
    score[0] = temp[1];
    score[1] = temp[2];
    score[2] = temp[3];
    score[3] = temp[4];
    gameId[0] = temp[5];
    gameId[1] = temp[6];
    scoreOnTable = temp[7];
    dealer = temp[8];
    scoreToChangeAfterGame[0] = temp[9];
    scoreToChangeAfterGame[1] = temp[10];
    scoreToChangeAfterGame[2] = temp[11];
    scoreToChangeAfterGame[3] = temp[12];
    gameLog.push(temp);

    unselectElementsIn(eRiichiBtns);
    refreshFieldSituation();
    resetScoreChange();
    scoreOnTableTakenFlag = false;
    isWinnerDealer = false;
  }
};

var hideElementsOnMask1 = function() {
  var toUnselectList = [eRonBtns, eTsumoBtns, eChuckBtns, eNagashiTypeBtns, eListenBtns, eNagashiManganBtns, eEarlyNagashiTypeBtns, eSelectSpecialTypeBtns, eSelectReducedPlayerBtns, eSelectWrongRonPlayerBtns];
  for(var i = 0 ; i < toUnselectList.length; i++) {
    for(var j = 0 ; j < toUnselectList[i].length; j++) {
      unselect(toUnselectList[i][j]);
    }
  }
  hideElementsIn(eDivsOnMask1);
  hideElement(eSelectTsumoScoreDiv);
  hideElement(eCalcScorePanel);
};

var nagashiClicked = function() {
  scenario = "nagashi";
  showElement(eSelectNagashiTypeDiv);
  showElement(eCancelBtn);
  showElement(eConfirmBtn);
  showElement(eCalcScorePanel);
  showElement(eMask1);
};

var ronClicked = function() {
  scenario = "ron";
  showElement(eSelectRonerDiv);
  showElement(eSelectChuckerDiv);
  showElement(eCancelBtn);
  showElement(eConfirmBtn);
  showElement(eCalcScorePanel);
  showElement(eMask1);
};

var tsumoClicked = function() {
  scenario = "tsumo";
  showElement(eSelectTsumoerDiv);
  eSelectTsumoScoreDiv.getElementsByTagName("input")[0].valueAsNumber = 4;
  eSelectTsumoScoreDiv.getElementsByTagName("input")[1].valueAsNumber = 30;
  showElement(eSelectTsumoScoreDiv);
  showElement(eCancelBtn);
  showElement(eConfirmBtn);
  showElement(eCalcScorePanel);
  showElement(eMask1);
};

var cancelBtnClicked = function() {
  scenario = "";
  hideElementsOnMask1();
  hideElement(eMask1);
};

var confirmBtnClicked = function() {
  var windInfoContent = fieldName[gameId[0]]+"局"+gameId[1]+"本場";
  var extraInfo = "";
  if(scenario === "nagashi") {

    if(isSelected(eNormalNagashiBtn)) {
      extraInfo = "流局";
      var listen = 0, scoreToAdd=0, scoreToSubtract=0;
      if(isSelected(eListenBtns[dealer%4])) isWinnerDealer = true;
      for(var i = 0 ; i <= 3 ; i++) if(isSelected(eListenBtns[i])) listen++;
      if(listen === 0 || listen === 4) scoreToAdd=0, scoreToSubtract=0;
      else {
        scoreToAdd = nagashiPtTotal / listen;
        scoreToSubtract = nagashiPtTotal / (4-listen);
      }
      for(var i = 0 ; i <= 3 ; i++) {
        if(isSelected(eListenBtns[i])) scoreChange[i] += scoreToAdd;
        else scoreChange[i] -= scoreToSubtract;
      }

      unselectElementsIn(eListenBtns);
      unselect(eNormalNagashiBtn);
      hideElement(eSelectNagashiListenerDiv);
    }
    else if(isSelected(eEarlyNagashiBtn)) {
      for(var i = 0 ; i < eEarlyNagashiTypeBtns.length; i++) {
        if(isSelected(eEarlyNagashiTypeBtns[i])) {
          extraInfo = eEarlyNagashiTypeBtns[i].innerHTML;
          isWinnerDealer = true;
          break;
        }
      }

      unselectElementsIn(eEarlyNagashiTypeBtns);
      unselect(eEarlyNagashiBtn);
      hideElement(eSelectNagashiEarlyFinishTypeDiv);
    }
    else if(isSelected(eManganNagashiBtn)) {
      extraInfo = "流局滿貫";
      if(isSelected(eListenBtns[dealer%4])) isWinnerDealer = true;
      var mangan = 0;
      for(var i = 0 ; i <= 3 ; i++) {
        if(isSelected(eNagashiManganBtns[i])) mangan++;
      }
      if(mangan > 0) { //流滿和了從親家開始 上家取
        var who = (dealer%4)-1;

        for(var i = 0 ; i <= 3 ; i++) {
          who++;
          if(who > 3) who %= 4;

          if(isSelected(eNagashiManganBtns[who])) {
            if(nagashiManganTakesPointsOnTable && !scoreOnTableTakenFlag) {
              scoreOnTableTakenFlag = true;
              scoreChange[who] += scoreOnTable;
              scoreOnTable = 0;
              scoreChange[who] += gameId[1] * bonusPtPerGame;
            }

            if(dealer % 4 === who) { //親
              for(var j = 0 ; j <= 3 ; j++) {
                if(who === j) scoreChange[j] += 12000;
                else scoreChange[j] -= 4000;
              }
            }
            else {
              for(var j = 0 ; j <= 3 ; j++) {
                if(who === j) scoreChange[j] += 8000;
                else if(dealer % 4 === j) scoreChange[j] -= 4000;
                else scoreChange[j] -= 2000;
              }
            }
          }
        }
      }
      unselectElementsIn(eListenBtns);
      unselectElementsIn(eNagashiManganBtns);
      unselect(eManganNagashiBtn);
      hideElement(eSelectNagashiManganerDiv);
    }
    else {
      alert("不能什麼都不選呀。什麼都沒發生。");
      hideElement(eSelectNagashiTypeDiv);
      cancelBtnClicked();
      return;
    }

    hideElement(eSelectNagashiTypeDiv);
  }
  else if(scenario === "tsumo") {
    extraInfo = "自摸";
    var tsumoScore = 0;

    if(isSelected(eTsumoBtns[dealer%4])) isWinnerDealer = true;

    for(var i = 0 ; i <= 3 ; i++) {
      if(isSelected(eTsumoBtns[i])) {
        scoreChange[i] += scoreOnTable;
        scoreOnTable = 0;

        tsumoScore = calcScore(eSelectTsumoScoreDiv, isWinnerDealer);
        break;
      }
      if(i === 3) {
        alert("必須選擇贏家。什麼事都沒發生...");
        cancelBtnClicked();
        return;
      }
    }

    if(tsumoScore % 100 != 0) tsumoScore = (parseInt(tsumoScore/100)+1)*100;

    if(isWinnerDealer) {
      while(tsumoScore % 300 != 0) tsumoScore += 100;
      tsumoScore += gameId[1] * bonusPtPerGame;
      var allPay = tsumoScore / 3;
      for(var i = 0 ; i <= 3 ; i++) {
        if(dealer%4 === i) scoreChange[i] += tsumoScore;
        else scoreChange[i] -= allPay;
      }
    }
    else {
      var winnerGet = 0;

      while(tsumoScore % 200 != 0) tsumoScore += 100;
      var dealerPay = tsumoScore / 2 + gameId[1]*bonusPtPerGame / 3;
      winnerGet += dealerPay;

      while((tsumoScore / 2) % 200 != 0) tsumoScore += 200;
      var otherPay = tsumoScore / 4 + gameId[1]*bonusPtPerGame / 3;
      winnerGet += otherPay * 2;

      for(var i = 0 ; i <= 3 ; i++) {
        if(isSelected(eTsumoBtns[i])) scoreChange[i] += winnerGet;
        else if(dealer%4 === i) scoreChange[i] -= dealerPay;
        else scoreChange[i] -= otherPay;
      }
    }

    unselectElementsIn(eTsumoBtns);
    hideElement(eSelectTsumoerDiv);
  }
  else if(scenario === "ron") {
    extraInfo = "榮和";
    var winnerCount = 0;
    var loserCount = 0;
    var winnerList = [];
    var loser = -1;
    var returnFlag = false;
    for(var i = 0 ; i <= 3 ; i ++) {
      if(isSelected(eRonBtns[i])) winnerList.push(i), winnerCount++;
      if(isSelected(eChuckBtns[i])) loser = i, loserCount++;
    }

    if(loserCount != 1) {
      alert("必須選擇銃家(而且只會有一個)。(什麼事都沒發生...)");
      returnFlag = true;
    }
    else if(winnerCount < 1) {
      alert("必須選擇贏家。(什麼事都沒發生...)");
      returnFlag = true;
    }
    else if(winnerList.includes(loser)) {
      alert("放銃和了不能是同個人。(什麼事都沒發生...)");
      returnFlag = true;
    }

    if(returnFlag) {
      for(var i = 0 ; i < eRonBtns.length ; i++) {
        if(isSelected(eRonBtns[i])) {
          unselect(eRonBtns[i]);
          hideElement(eSelectScoreDivs[i]);
        }
      }
      hideElement(eSelectRonerDiv);
      unselectElementsIn(eChuckBtns);
      hideElement(eSelectChuckerDiv);
      cancelBtnClicked();
      return;
    }

    var firstWinner = true;
    for(var i = loser+1 ; i < loser+4 ; i++) {
      who = i % 4;
      if(isSelected(eRonBtns[who])) {
        if(who === dealer%4) isWinnerDealer = true;
        var winner = who;
        var winnerGet = calcScore(eSelectScoreDivs[winner], winner === dealer%4);
        if(winnerGet % 100 != 0) winnerGet = (parseInt(winnerGet/100)+1)*100;
        scoreChange[winner] += winnerGet;
        if(firstWinner) {
          scoreChange[winner] += scoreOnTable + gameId[1] * bonusPtPerGame;
          scoreOnTable = 0;
          scoreChange[loser] -= gameId[1] * bonusPtPerGame;
          firstWinner = false;
        }
        scoreChange[loser] -= winnerGet;
      }
    }

    unselectElementsIn(eRonBtns);
    hideElement(eSelectRonerDiv);
    unselectElementsIn(eChuckBtns);
    hideElement(eSelectChuckerDiv);
    hideElementsIn(eSelectScoreDivs);
  }
  else if(scenario === "special") {
    if(isSelected(eReduceSpecialBtn)) {
      for(var i = 0 ; i <= 3 ; i++) {
        if(isSelected(eSelectReducedPlayerBtns[i])) {
          score[i] -= 1000;
          scoreReduced[i] -= 1000;
          scoreOnTable += 1000;
          refreshFieldSituation();
          cancelBtnClicked();

          unselectElementsIn(eSelectReducedPlayerBtns);
          unselect(eReduceSpecialBtn);
          hideElement(eSelectReducedPlayerDiv);
          hideElement(eSelectSpecialTypeDiv);
          refreshFieldSituation();
        }
      }
      return;
    }
    else if(isSelected(eWrongRonSpecialBtn)) {
      var count = 0;
      for(var i = 0 ; i <= 3 ; i++) if(isSelected(eSelectWrongRonPlayerBtns[i])) count++;
      if(count === 0) {
        alert("沒有選擇誰錯和。返回中..");
        cancelBtnClicked();
        return;
      }
      else if(count === 4) {
        alert("怎麼可能同時四個人錯和, 你唬我啊...");
        cancelBtnClicked();
        return;
      }

      //錯和成立時要先把大家的立直棒拿回來 當這局沒發生過
      //(相當於再按一次立直)
      for(var i = 0 ; i < playerNum ; i++) {
        if(isSelected(eRiichiBtns[i])) riichiClicked(i);
      }


      for(var i = 0 ; i < playerNum ; i++) {
        if(isSelected(eSelectWrongRonPlayerBtns[i])) {
          if(i === dealer% playerNum) {
            for(j = 0 ; j < playerNum ; j ++) {
              if(wrongRonPenaltyFixed) {
                if(i === j) scoreChange[j] -= wrongRonPtTotal;
                else if(!wrongRonReduceOnly) scoreChange[j] += wrongRonPtTotal / 3;
              }
              else {
                if(i === j) scoreChange[j] -= wrongRonPtTotal * 1.5;
                else if(!wrongRonReduceOnly) scoreChange[j] += wrongRonPtTotal / 2;
              }
            }
          }
          else {
            for(j = 0 ; j < playerNum ; j++) {
              if(i === j) scoreChange[j] -= wrongRonPtTotal;
              else if(!wrongRonReduceOnly) {
                if(wrongRonPenaltyFixed) scoreChange[j] += wrongRonPtTotal / 3;
                else {
                  if(j === dealer%playerNum) scoreChange[j] += wrongRonPtTotal / 2;
                  else scoreChange[j] += wrongRonPtTotal / 4;
                }
              }
            }
          }
          unselect(eSelectWrongRonPlayerBtns[i]);
        }
      }

      if(wrongRonCalcAfterGame) {
        for(var i = 0 ; i < playerNum; i++) {
          scoreToChangeAfterGame[i] += scoreChange[i];
          scoreChange[i] = 0;
        }
      }

      unselect(eWrongRonSpecialBtn);
      hideElement(eSelectSpecialTypeDiv);
      isWinnerDealer = true;
      extraInfo = "錯和";
    }
    else {
      alert("要選東西啊, 不要什麼都不選想把它玩壞好嗎...");
      cancelBtnClicked();
      return;
    }
  }

  var scoreReducedInfo = [""];
  for(var i = 0 ; i <= 3 ; i++) {scoreReducedInfo.push(""+signed(scoreReduced[i]));}
  gameLog.push(scoreReducedInfo);

  var scoreChangeInfo = [extraInfo];
  for(var i = 0 ; i <= 3 ; i++) {scoreChangeInfo.push(""+signed(scoreChange[i]));}
  gameLog.push(scoreChangeInfo);

  for(var i = 0 ; i <= 3 ; i ++) scoreReduced[i] = 0;

  var highestScore = -1;
  var lowestScore = 999999;
  var dealerHasHighestScore = false;
  for(var i = 0 ; i <= 3 ; i ++) {
    score[i] = score[i] + scoreChange[i];
    if(score[i] > highestScore) {
      highestScore = score[i];
      if(i === dealer%4) dealerHasHighestScore = true;
      else dealerHasHighestScore = false;
    }
    if(score[i] < lowestScore) lowestScore = score[i];
  }

  if(isWinnerDealer) {
    if(scenario === "nagashi" && isDealerWinContinue > 0) gameId[1] ++;
    else if(scenario === "ron" && isDealerWinContinue >= 0) gameId[1] ++;
    else if(scenario === "tsumo" && isDealerWinContinue >= 0) gameId[1] ++;
  }
  else if(scenario === "nagashi") {
    gameId[0]++;
    gameId[1]++;
    dealer++;
  }
  else {
    gameId[0]++;
    gameId[1] = 0;
    dealer++;
  }
  isWinnerDealer = false;
  //現在要修改的是, 結束遊戲的條件


  //如果沒人飛掉 就繼續
  if(scoreRequiredToContinue >= 0 && lowestScore < scoreRequiredToContinue) endGameFlag = true;
  else if(winEnoughFinishEarly && highestScore >= scoreRequiredToFinishEarly) endGameFlag = true;
  else if(gameId[0] >= gameAmount && highestScore >= scoreRequiredToEnd) endGameFlag = true;
  else if(!addExtraGames && gameId[0] >= gameAmount) endGameFlag = true;
  else if(addExtraGames && gameId[0] >= gameAmount + 4) endGameFlag = true; //+4局還沒有分勝負就結束
  else if(isAllLast) {
    // 1結束 0聽牌續行 -1續行
    if(lastDealerTopEndRule === 1 && dealerHasHighestScore && highestScore >= scoreRequiredToEnd) endGameFlag = true;
    else if(lastDealerTopEndRule === 0 && dealerHasHighestScore && (scenario === "tsumo" || scenario === "ron") && highestScore >= scoreRequiredToEnd) endGameFlag = true;
  }

  if(endGameFlag) {
    gameId[0] = -1;
    isAllLast = false;
  }
  else if(gameId[0] >= gameAmount -1) isAllLast = true;

  scenario = "";
  hideElementsIn(eDivsOnMask1);
  hideElement(eMask1);
  for(var i = 0 ; i <= 3; i++) {
    if(scoreChange[i]) {
      eScoreChangeDivs[i].innerHTML = ""+signed(scoreChange[i]);
    }
    else eScoreChangeDivs[i].innerHTML = "-";
  }
  displayScoreChange();
};

var setVisibility = function(t, stats) {
  if(stats==="hide") {
    if(!t.classList.contains("hidden")) {
      t.classList.add("hidden");
    }
  }
  else { //show
    if(t.classList.contains("hidden")) {
      t.classList.remove("hidden");
    }
  }
};

var getNumber = function(valueToGet, defaultValue=25000) {
  var std = parseInt(valueToGet);
  if(std !== std) std = defaultValue; //if valueToGet is NaN
  return std;
}
var isSelected = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(e.classList.contains("selected")) return true;
  else return false;
};

var select = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(!e.classList.contains("selected")) e.classList.add("selected");
};
var unselect = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(e.classList.contains("selected")) e.classList.remove("selected");
};

var reverse = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(isSelected(e)) unselect(e);
  else select(e);
};

var showElement = function(e) {
  setVisibility(e, "show");
};

var hideElement = function(e) {
  setVisibility(e, "hide");
};

var reverseVisibility = function(e) {
  if(e === undefined) console.log(arguments.callee.caller.toString());
  if(e.classList.contains("hidden")) showElement(e);
  else hideElement(e);
};

var selectTsumoer = function(who) {
  for(var i = 0 ; i <= 3 ; i++) {
    if(who == i) select(eTsumoBtns[i]);
    else unselect(eTsumoBtns[i]);
  }
};

var selectRoner = function(who) {
  reverse(eRonBtns[who]);
  reverseVisibility(eSelectScoreDivs[who]);
  if(isSelected(eRonBtns[who])) {
    eSelectScoreDivs[who].getElementsByTagName("input")[0].valueAsNumber = 4;
    eSelectScoreDivs[who].getElementsByTagName("input")[1].valueAsNumber = 30;
  }
};

var selectChucker = function(who) {
  for(var i = 0 ; i <= 3 ; i++) {
    if(who == i) select(eChuckBtns[i]);
    else unselect(eChuckBtns[i]);
  }
};

var selectNagashiListener = function(who) {
  reverse(eListenBtns[who]);
};

var selectNagashiType = function(typeNum) {
  if(!isSelected(eNagashiTypeBtns[typeNum])) {
    for(var i = 0 ; i < eNagashiTypeBtns.length ; i++) {
      if(isSelected(eNagashiTypeBtns[i])) {
        unselect(eNagashiTypeBtns[i]);
        for(var j = 0 ; j < eNagashiDetailSelectorInTypeDivs[i].length ; j++) unselect(eNagashiDetailSelectorInTypeDivs[i][j]);
        hideElement(eNagashiTypeDivs[i]);

        /*流滿比較特別 要多一個欄位*/
        if(i === 2) {
          unselectElementsIn(eListenBtns);
          hideElement(eSelectNagashiListenerDiv);
        }
      }
    }
    select(eNagashiTypeBtns[typeNum]);
    showElement(eNagashiTypeDivs[typeNum]);

    /*流滿比較特別 要多一個欄位*/
    if(typeNum === 2) showElement(eSelectNagashiListenerDiv);
  }
};

var selectNagashiEarlyType = function(typeNum) {
  for(var i = 0 ; i < eEarlyNagashiTypeBtns.length ; i++) {
    if(i === typeNum) select(eEarlyNagashiTypeBtns[i]);
    else unselect(eEarlyNagashiTypeBtns[i]);
  }
};

var selectNagashiManganer = function(who) {
  reverse(eNagashiManganBtns[who]);
};

var riichiClicked = function(who) {
  if(!isSelected(eRiichiBtns[who])) {
    select(eRiichiBtns[who]);
    score[who] -= 1000;
    scoreReduced[who] -= 1000;
    scoreOnTable += 1000;
  }
  else {
    unselect(eRiichiBtns[who]);
    score[who] += 1000;
    scoreReduced[who] += 1000;
    scoreOnTable -= 1000;
  }
  refreshFieldSituation();
};

var calcScore = function(setScoreDiv, isDealer) {
  var fan = setScoreDiv.getElementsByTagName("input")[0].valueAsNumber;
  var fu = setScoreDiv.getElementsByTagName("input")[1].valueAsNumber;
  if(fan !== parseInt(fan, 10) || fu !== parseInt(fu, 10)) return 0;

  var score = Math.pow(2,fan+4)*fu;
  if(calcScoreRule === 0) {
    if(fan > 12) score = 32000 * parseInt(fan/13);
    else if (fan > 10) score = 24000;
    else if (fan > 7) score = 16000;
    else if (fan > 5) score = 12000;
    else if (fan > 4) score = 8000;

    if(fan < 5 && roundUpMangan && score >= 7680) score = 8000;

    if(fan < 5 && score > 8000) score = 8000;
    else if(score < 1000) score = 1000;
  }
  if(isDealer) score *= 1.5;

  return score;
};

var refreshFieldSituation = function() {

  if(endGameFlag) {
    for(var i = 0 ; i <= 3; i ++) {
      eScoreDivs[i].innerHTML = score[i];
    }
    eWindInfo.innerHTML = "遊戲結束";
    eRiichiAmount.innerHTML = "";

    hideElementsIn(eRiichiBtns);
    hideElementsIn(eResultBtns);
    hideElement(eRollbackBtn);
  }
  else {
    for(var i = 0 ; i <= 3; i ++) {
      eScoreDivs[i].innerHTML = score[i];
      eWindDivs[i].innerHTML = winds[(i-dealer+400)%4];
      if(dealer%4 === i) eWindDivs[i].classList.add("dealer");
      else eWindDivs[i].classList.remove("dealer");
    }
    eWindInfo.innerHTML = fieldName[gameId[0]]+"局<br>"+gameId[1]+"本場";
    eRiichiAmount.innerHTML = "供託x"+ scoreOnTable / 1000;

    showElementsIn(eRiichiBtns);
    showElementsIn(eFunctionBtns);
    showElementsIn(eResultBtns);
    if(gameLog.length < 3) hideElement(eRollbackBtn);
  }
};

var showElementsIn = function(e) {
  if(e.constructor !== Array) console.log("in showElementsIn: " + e + "is not array");
  else {
    for(var i = 0 ; i < e.length ; i++) showElement(e[i]);
  }
};

var hideElementsIn = function(e) {
  if(e.constructor !== Array) console.log("in hideElementsIn: " + e + "is not array");
  else {
    for(var i = 0 ; i < e.length ; i++) hideElement(e[i]);
  }
};

var selectElementsIn = function(e) {
  if(e.constructor !== Array) console.log("in selectElementsIn: " + e + "is not array");
  else {
    for(var i = 0 ; i < e.length ; i++) select(e[i]);
  }
};

var unselectElementsIn = function(e) {
  if(e.constructor !== Array) console.log("in unselectElementsIn: " + e + "is not array");
  else {
    for(var i = 0 ; i < e.length ; i++) unselect(e[i]);
  }
};

var displayScoreChange = function() {
  hideElementsIn(eRiichiBtns);
  hideElementsIn(eFunctionBtns);
  hideElementsIn(eResultBtns);
  showElementsIn(eScoreChangeDivs);
  hideElement(eWindInfo);
  hideElement(eRiichiAmount);
  showElement(eOkBtn);
};

var resetScoreChange = function() {
  for(var i = 0 ; i <= 3; i ++) scoreChange[i] = 0;
};

var okBtnClicked = function() {
  unselectElementsIn(eRiichiBtns);
  showElementsIn(eRiichiBtns);
  showElementsIn(eFunctionBtns);
  showElementsIn(eResultBtns);
  hideElementsIn(eScoreChangeDivs);
  showElement(eWindInfo);
  showElement(eRiichiAmount);
  hideElement(eOkBtn);
  refreshFieldSituation();
  resetScoreChange();
  scoreOnTableTakenFlag = false;
  isWinnerDealer = false;
  if(endGameFlag) {
    if(wrongRonCalcAfterGame) {
      gameLog.push(["結果", score[0], score[1], score[2], score[3]]);
      var tempstr = [];
      tempstr.push("錯和調整");
      for(var i = 0 ; i < playerNum ; i++) {
        tempstr.push(scoreToChangeAfterGame[i]);
        score[i] += scoreToChangeAfterGame[i];
        scoreToChangeAfterGame[i] = 0;
      }
      gameLog.push(tempstr);

      refreshFieldSituation();
    }
    gameLog.push(["最終結果", score[0], score[1], score[2], score[3]]);
    // 1四捨五入 2五捨六入 -1 不採用
    var highestPlayer = -1;
    var highestScore = -1;
    var scoreDiff = 0.0;
    for(var i = 0 ; i <= 3 ; i ++) {
      var who = (startDealer + i) % 4;
      if(score[who] > highestScore) {
        highestPlayer = who;
        highestScore = score[who];
      }
    }

    for(var i = 0 ; i <= 3 ; i ++) score[i] -= standardScore;

    if(roundType === -1) {
      for(var i = 0 ; i <= 3 ; i ++) score[i] = Math.round(score[i] / 1000*10)/10;
    }
    else {
      for(var i = 0 ; i <= 3 ; i ++) {
        score[i] = Math.round(score[i] / 1000*10)/10;
        var adjustedScore = Math.floor(score[i]);
        if(roundType === 1) {
          if(score[i] - adjustedScore >= 0.5) adjustedScore += 1;
        }
        else if(roundType === 2) {
          if(score[i] - adjustedScore >= 0.6) adjustedScore += 1;
        }
        scoreDiff += adjustedScore - score[i];
        score[i] = adjustedScore;
      }
      score[highestPlayer] -= scoreDiff;
    }

    gameLog.push(["分數", score[0], score[1], score[2], score[3]]);
    var scoreRank = [0,0,0,0];
    for(var i = 0 ; i <= 3; i++) {
      var whoi = (startDealer+i)%4;
      for(var j = i+1 ; j <= 3 ; j++) {
        if(i === j) continue;
        var whoj = (startDealer+j)%4;
        if(score[whoi] < score[whoj]) scoreRank[whoi]++;
        else scoreRank[whoj]++;
      }
    }
    var topRewardInfo = ["Top賞"];

    for(var i = 0 ; i <= 3; i ++ ) {
      if(highestPlayer === i) {
        topRewardInfo.push(topReward);
        score[highestPlayer] += topReward;
      }
      else topRewardInfo.push("");
    }
    gameLog.push(topRewardInfo);
    var scoreOrderAdjust = ["名次補正"];

    for(var i = 0 ; i <= 3 ; i ++) {
      scoreOrderAdjust.push(scoreOrderAdjustAmount[scoreRank[i]]);
      score[i] = Math.round((score[i] + scoreOrderAdjustAmount[scoreRank[i]])*10)/10;
    }

    gameLog.push(scoreOrderAdjust);
    gameLog.push(["最終得分",score[0], score[1], score[2], score[3]]);

  }
  else {
    gameLog.push([fieldName[gameId[0]]+"局"+gameId[1]+"本場", score[0], score[1], score[2], score[3], gameId[0], gameId[1], scoreOnTable, dealer, scoreToChangeAfterGame[0], scoreToChangeAfterGame[1], scoreToChangeAfterGame[2], scoreToChangeAfterGame[3]]);
  }
};

var detailBtnClicked = function() {
  var tb = document.createElement("table");
  for(var i = 0 ; i < gameLog.length ; i++) {
    var tr = document.createElement("tr");

    for(j = 0 ; j < playerNum+1 ; j++) {
      var td = document.createElement("td");
      td.innerHTML = gameLog[i][j];
      tr.appendChild(td);
    }
    tb.appendChild(tr);
  }
  detailPanel.appendChild(tb);
  hideElement(eCancelBtn);
  hideElement(eConfirmBtn);
  showElement(eReturnBtn);
  showElement(eDetailPanel);
  showElement(mask1);
};

var returnBtnClicked = function() {
  showElement(eCancelBtn);
  showElement(eConfirmBtn);
  hideElement(eReturnBtn);
  eDetailPanel.innerHTML = "";
  cancelBtnClicked();
};

var specialClicked = function() {
  scenario = "special";
  showElement(eSelectSpecialTypeDiv);
  showElement(eCancelBtn);
  showElement(eConfirmBtn);
  showElement(eCalcScorePanel);
  showElement(mask1);
};

var selectSpecialType = function(which) {
  var btns = eSelectSpecialTypeBtns;
  var divs = eSelectSpecialTypeDivs;
  var btnsInDiv = eDetailSelectorInSpecialTypeDivs;
  for(var i = 0 ; i < eSelectSpecialTypeBtns.length; i++) {

    if(which === i && !isSelected(btns[i])) {
      select(btns[i]);
      showElement(divs[i]);
    }
    else if(isSelected(btns[i])) {
      unselect(btns[i]);
      hideElement(divs[i]);
      for(var j = 0 ; j < btnsInDiv[i].length ; j++) {
        unselect(btnsInDiv[i][j]);
      }
    }
  }
};

var selectReducedPlayer = function(who) {
  var btns = eSelectReducedPlayerBtns;
  for(var i = 0 ; i <= 3 ; i++) {
    if(i===who) select(btns[i]);
    else if(isSelected(btns[i])) unselect(btns[i]);
  }
};

var selectWrongRonPlayer = function(who) {
  reverse(eSelectWrongRonPlayerBtns[who]);
};

/* settings part */
var setGameAmount = function(element, amount) {
  if(element.checked) gameAmount = parseInt(amount);
  resetField();
};

var setStartDealer = function(element, num) {
  if(element.checked) startDealer = num;
  resetField();
};

var setScoreToBeginWith = function(amount, player) {
  var std = getNumber(amount, 25000);
  if(std % 100 != 0) std = parseInt(std / 100) * 100;

  if(player < 0) {
    for(var i = 0 ; i < scoreToBeginWith.length ; i++) scoreToBeginWith[i] = std;
  }
  else scoreToBeginWith[player] = std;

  resetField();
};


var setStandardScore = function(amount) {
  standardScore  = parseInt(amount);
  if(standardScore  % 100 != 0) standardScore  = parseInt(standardScore  / 100)* 100;
  resetField();
};

var setScoreRequiredToEnd = function(amount) {
  scoreRequiredToEnd = parseInt(amount);
  if(scoreRequiredToEnd % 100 != 0) scoreRequiredToEnd = parseInt(scoreRequiredToEnd / 100)* 100;
  resetField();
};

var setScoreRequiredToFinishEarly = function(amount) {
  scoreRequiredToFinishEarly = parseInt(amount);
  if(scoreRequiredToFinishEarly % 100 != 0) scoreRequiredToFinishEarly = parseInt(scoreRequiredToFinishEarly / 100)* 100;
  resetField();
};

var alertElement = function(element) {
  element.style.backgroundColor = "#FF9999";
  setTimeout(function() {
    element.style.transition = "all 1s";
    element.style.backgroundColor = "";
    setTimeout(function() {
      element.style.transition = "";
    }, 1000);
  }, 1);
};

var adjustTopReward = function() {
  topReward = 0 ;
  for(var i = 0 ; i < scoreToBeginWith.length ; i++) {
    topReward += standardScore - scoreToBeginWith[i];
  }
  topReward /= 1000;
};

var adjustScoreToBeginWith = function(element, player) {
  if(player >= 0) {
    if(element.value != scoreToBeginWith[player]) {
      element.value = scoreToBeginWith[player];
      alertElement(element);
    }
  }
  else {
    if(element.value != scoreToBeginWith[0]) {
      element.value = scoreToBeginWith[0];
      alertElement(element);
    }
  }
  adjustTopReward();

  resetField();
};

var adjustScoreRequiredToEnd = function(element) {
  if(element.value != scoreRequiredToEnd) {
    element.value = scoreRequiredToEnd;
    alertElement(element);
  }
  resetField();
};

var adjustScoreRequiredToFinishEarly = function(element) {
  if(element.value != scoreRequiredToFinishEarly) {
    element.value = scoreRequiredToFinishEarly;
    alertElement(element);
  }
  resetField();
};

var adjustStandardScore = function(element) {
  if(element.value != standardScore) {
    element.value = standardScore;
    alertElement(element);
  }
  adjustTopReward();
  resetField();
};

var setBonusPtPerGame = function(amount) {
  bonusPtPerGame = parseInt(amount);
  if(bonusPtPerGame % 300 != 0) bonusPtPerGame = parseInt(bonusPtPerGame / 300)*300;
  resetField();
};

var adjustBonusPtPerGame = function(element) {
  if(element.value != bonusPtPerGame) {
    element.value = bonusPtPerGame;
    alertElement(element);
  }
  resetField();
};

var resetBasicPoints = function() {
  scoreToBeginWith = [25000,25000,25000,25000];
  scoreRequiredToEnd = 30000;
  scoreRequiredToFinishEarly = 50000;
  scoreToBeginWithDifferent = false;
  standardScore = 30000;
  topReward = 20;
  bonusPtPerGame = 300;
  addExtraGames = true;
  winEnoughFinishEarly = false;
  $("startPt").value = scoreToBeginWith[0];
  for(var i = 0 ; i < eScoreToBeginWithDivs.length; i++) eScoreToBeginWithDivs[i].value = scoreToBeginWith[i];
  $("standardScore").value = standardScore;
  $("endRequiredPt").value = scoreRequiredToEnd;
  $("scoreRequiredToFinishEarly").value = scoreRequiredToFinishEarly;
  $("bonusPtPerGame").value = bonusPtPerGame;
  $("scoreToBeginWithDifferent").checked = scoreToBeginWithDifferent;
  setScoreToBeginWithDifferent($("scoreToBeginWithDifferent"));
  $("addExtraGames").checked = addExtraGames;
  $("winEnoughFinishEarly").checked = winEnoughFinishEarly;
  resetField();
};

var setScoreRequiredToContinue = function(amount) {
  scoreRequiredToContinue = amount;
  resetField();
};

var setDealerWinContinue = function(type) {
  isDealerWinContinue = type;
  resetField();
};

var setLastDealerTopEndRule = function(type) {
  lastDealerTopEndRule = type;
  resetField();
};

var setIsNagashiManganTakeTablePt = function(element) {
  nagashiManganTakesPointsOnTable = element.checked;
  resetField();
};

var setRoundUpMangan = function(element) {
  roundUpMangan = element.checked;
  resetField();
};

var settingClicked = function() {
  showElement(eSettingPanel);
  showElement(eMask1);
};

var closeSettingBtnClicked = function() {
  hideElement(eSettingPanel);
  hideElement(eMask1);
};

var setScoreAdjustAmount = function(element, order) {
  scoreOrderAdjustAmount[order] = element.valueAsNumber;
  scoreOrderAdjustAmount[0] = -(scoreOrderAdjustAmount[1] + scoreOrderAdjustAmount[2] + scoreOrderAdjustAmount[3]);
  eScoreAdjustTop.value = scoreOrderAdjustAmount[0];
  resetField();
};

var resetToBasicAdjusts = function() {
  scoreOrderAdjustAmount = [20,10,-10,-20];
  for(var i = 0 ; i <= 3 ; i++) eScoreAdjustAmounts[i].valueAsNumber = scoreOrderAdjustAmount[i];
  resetField();
};

var setAddExtraGames = function(element) {
  addExtraGames = element.checked;
  resetField();
};

var setWinEnoughFinishEarly = function(element) {
  winEnoughFinishEarly = element.checked;
  resetField();
};

var setCalcScoreRule = function(element, type) {
  if(element.checked) calcScoreRule = parseInt(type);
  resetField();
};

var adjustFanAmount = function(element) {
  element.valueAsNumber = parseInt(element.valueAsNumber);
  if(calcScoreRule === 1 && element.valueAsNumber > 48) element.value = 48;
  if(element.valueAsNumber < 1) element.value = 1;
};

var adjustFuAmount = function(element) {
  var currentVal = element.valueAsNumber;
  if(currentVal > 170) element.value = 170;
  if(currentVal < 20) element.value = 20;
  if(currentVal % 10 != 0 && currentVal != 25) {
    if(currentVal < 30 && currentVal > 25) element.value = 25;
    else element.value = Math.floor(currentVal/10)*10;
  }
};

var setScoreToBeginWithDifferent = function(element) {
  scoreToBeginWithDifferent = element.checked;
  $("startPt").disabled = scoreToBeginWithDifferent;
  for(var i = 0; i < eScoreToBeginWithDivs.length; i++) eScoreToBeginWithDivs[i].disabled = !scoreToBeginWithDifferent

  if(scoreToBeginWithDifferent) {
    for(var i = 0 ; i < playerNum ; i++) {
      scoreToBeginWith[i] = getNumber(eScoreToBeginWithDivs[i].value, 25000);
    }
  }
  else {
    for(var i = 0 ; i < playerNum ; i++) {
      scoreToBeginWith[i] = getNumber($("startPt").value, 25000);
    }
  }

  resetField();
};

var setWrongRonCalcAfterGame = function(element) {
  wrongRonCalcAfterGame = element.checked;
  setWrongRonPenaltyAmount($("wrongRonPenaltyAmount").value);
  adjustWrongRonPenaltyAmount($("wrongRonPenaltyAmount"));
  resetField();
};

var setWrongRonReduceOnly = function(element) {
  wrongRonReduceOnly = element.checked;
  setWrongRonPenaltyAmount($("wrongRonPenaltyAmount").value);
  adjustWrongRonPenaltyAmount($("wrongRonPenaltyAmount"));
  resetField();
};

var setWrongRonPenaltyFixed = function(element) {
  wrongRonPenaltyFixed = element.checked;
  setWrongRonPenaltyAmount($("wrongRonPenaltyAmount").value);
  adjustWrongRonPenaltyAmount($("wrongRonPenaltyAmount"));
  resetField();
};

var setWrongRonPenaltyAmount = function(value) {
  wrongRonPtTotal = value;
  if(wrongRonCalcAfterGame || wrongRonReduceOnly) {
    wrongRonPtTotal = parseInt(wrongRonPtTotal/100)*100;
  }
  else {
    if(wrongRonPenaltyFixed) wrongRonPtTotal = parseInt(wrongRonPtTotal/300)*300;
    else wrongRonPtTotal = parseInt(wrongRonPtTotal/200)*200;
  }
  resetField();
};

var adjustWrongRonPenaltyAmount = function(element) {
  if(element.value != wrongRonPtTotal) {
    element.value = wrongRonPtTotal;
    alertElement(element);
  }
  resetField();
};

resetField();
