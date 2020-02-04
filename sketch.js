var player, diswidth, disheight, invground, backobj, demon, demonhealth;
var prevy, playerallow;
var ground, groundgroup, monstergroup, bulletgroup, bossgroup;
var score, health, sideindex, playerhealth, playerhealthimg;

function setup() {
  createCanvas(displayWidth-200,displayHeight-200);
  diswidth = displayWidth-200;
  playerhealth = 8;
  disheight = displayHeight-200;
  ground = createSprite(diswidth/2, disheight-250, diswidth +20, 20);
  player = createSprite(diswidth/2, disheight/2, 50, 50);
  demonhealth = 10;
  demon = createSprite(diswidth-100, ground.y -200, diswidth+50, 30);
  backobj = createSprite(diswidth/2, disheight-230, diswidth, 20);
  invground = createSprite(diswidth/2, disheight-250, diswidth, 18);
  invground.depth = 1;
  playbtn = createSprite(diswidth/2, disheight/2, 100, 30);
  groundgroup = createGroup();
  bulletgroup = createGroup();
  monstergroup = createGroup();
  skullgroup = createGroup();
  bossgroup = createGroup();
  gamestate = 'home';
  playerhealthimg = createSprite(200, 100,10, 10);
  playerhealthimg.scale = 3;
  score = 0;
  //player.debug = true;
  prevy = disheight/2;
  playerallow = 0;
  sideindex = 0;
  backobj.addImage('backobjs', backimage)
  playerhealthimg.addImage('health8', health8img);
  playerhealthimg.addImage('health7', health7img);
  playerhealthimg.addImage('health6', health6img);
  playerhealthimg.addImage('health5', health5img);
  playerhealthimg.addImage('health4', health4img);
  playerhealthimg.addImage('health3', health3img);
  playerhealthimg.addImage('health2', health2img);
  playerhealthimg.addImage('health1', health1img);
  playerhealthimg.addImage('health0', health0img);
  ground.addImage('background', groundimg);
  playbtn.addImage('playbtn1', play1img);
  player.addAnimation('idleright', playeridle);
  player.addAnimation('idleleft', playerleftidle);
  player.addAnimation('runright', playerrunright);
  player.addAnimation('runleft', playerrunleft);
  player.addAnimation('jump', playerjump);
  player.addAnimation('attackright', playerattackright);
  player.addAnimation('attackleft', playerattackleft);
  player.addAnimation('hurtright', playerhurtright);
  demon.addAnimation('demonfromright', demonright);
  demon.addAnimation('demonfromleft', demonleft);
  wolfrunright.frameDelay = 1+1/2;
  playerjump.frameDelay = 5;
  backobj.scale = 3;
  backobj.depth = ground.depth-2;
  player.depth = ground.depth-1;
  //groundgroup.add(ground);
}
function preload(){
  health8img = loadImage('Assets/health8;.png');
  health7img = loadImage('Assets/health7;.png');
  health6img = loadImage('Assets/health6;.png');
  health5img = loadImage('Assets/health5;.png');
  health4img = loadImage('Assets/health4;.png');
  health3img = loadImage('Assets/health3;.png');
  health2img = loadImage('Assets/health2;.png');
  health1img = loadImage('Assets/health1;.png');
  health0img = loadImage('Assets/health0;.png');
  backimage = loadImage('Assets/backimg.png');
  groundimg = loadImage('Assets/ground.png');
  play1img = loadImage('Assets/play1.png');
  play2img =  loadImage('Assets/play2.png');
  demonright = loadAnimation('Assets/demon1.png', 'Assets/demon2.png', 'Assets/demon3.png', 'Assets/demon4.png', 'Assets/demon5.png');
  demonleft = loadAnimation('Assets/demonl1.png', 'Assets/demonl2.png', 'Assets/demonl3.png', 'Assets/demonl4.png', 'Assets/demonl5.png');
  skullright = loadAnimation('Assets/skull1.png', 'Assets/skull2.png', 'Assets/skull3.png', 'Assets/skull4.png','Assets/skull5.png', 'Assets/skull6.png', 'Assets/skull7.png', 'Assets/skull8.png')
  wolfrunright = loadAnimation('Assets/wolfrun1.png', 'Assets/wolfrun2.png', 'Assets/wolfrun3.png','Assets/wolfrun4.png', 'Assets/wolfrun5.png', 'Assets/wolfrun1.png', 'Assets/wolfrun2.png', 'Assets/wolfrun3.png','Assets/wolfrun4.png', 'Assets/wolfrun5.png');
  playerrunright = loadAnimation('Assets/walk1.png', 'Assets/walk2.png', 'Assets/walk3.png', 'Assets/walk4.png', 'Assets/walk5.png', 'Assets/walk6.png');  
  playerattackright = loadAnimation('Assets/attack1.png', 'Assets/attack2.png', 'Assets/attack3.png', 'Assets/attack4.png', 'Assets/attack5.png', 'Assets/attack6.png');
  playerattackleft = loadAnimation('Assets/attackl1.png', 'Assets/attackl2.png', 'Assets/attackl3.png', 'Assets/attackl4.png', 'Assets/attackl5.png', 'Assets/attackl6.png');  
  playerrunleft = loadAnimation('Assets/walkl1.png', 'Assets/walkl2.png', 'Assets/walkl3.png', 'Assets/walkl4.png', 'Assets/walkl5.png', 'Assets/walkl6.png');
  firerightanim = loadAnimation('Assets/fire1.png', 'Assets/fire2.png', 'Assets/fire3.png', 'Assets/fire4.png', 'Assets/fire5.png', 'Assets/fire6.png', 'Assets/fire7.png', 'Assets/fire8.png');
  fireleftanim = loadAnimation('Assets/firel1.png', 'Assets/firel2.png', 'Assets/firel3.png', 'Assets/firel4.png', 'Assets/firel5.png', 'Assets/firel6.png', 'Assets/firel7.png', 'Assets/firel8.png');
  playeridle = loadAnimation('Assets/idle1.png', 'Assets/idle2.png', 'Assets/idle3.png', 'Assets/idle4.png', 'Assets/idle5.png', 'Assets/idle6.png', 'Assets/idle7.png')
  playerleftidle = loadAnimation('Assets/idlel1.png', 'Assets/idlel2.png', 'Assets/idlel3.png', 'Assets/idlel4.png', 'Assets/idlel5.png', 'Assets/idlel6.png', 'Assets/idlel7.png')
  playerhurtright = loadAnimation('Assets/hurt1.png', 'Assets/hurt1.png', 'Assets/hurt1.png', 'Assets/hurt1.png');
  playerjump = loadAnimation('Assets/jump1.png', 'Assets/jump2.png', 'Assets/jump3.png', 'Assets/jump4.png', 'Assets/jump5.png', 'Assets/jump6.png', 'Assets/jump7.png', 'Assets/jump8.png')
  //groundgroup.add(ground)
}
function draw() {
  invground.visible = false;
  //Controls
  player.collide(invground);
  //projectile();
  monstergroup.collide(invground);
  if(gamestate === 'home'){
    playerhealthimg.visible = false;
    ground.visible = false;
    playbtn.visible = true;
    backobj.visible = false;
    demon.visible = false;
    if(mouseDown()){
      gamestate = 'play';
    }
  }
  if(gamestate === 'play'){
    playerhealthimg.visible = true;
    ground.visible = true;
    backobj.visible = true;
    playbtn.visible = false;
    if(playerhealth <8){
      playerhealthimg.changeAnimation('health'+playerhealth);
    }
    monsters(score);
    skulls(score);
    player.scale = 3;
    background(0,110,200); 
    textSize(40);
    fill(255, 0, 0);
    text("Score : "+score, diswidth/10, disheight/10);
    if(monstergroup.isTouching(player)){
      monstergroup.destroyEach();
      var explosion = createSprite(player.x, player.y-20, 10, 10);
      explosionanim=loadAnimation('Assets/explosion1.png','Assets/explosion2.png', 'Assets/explosion3.png','Assets/explosion4.png', 'Assets/explosion5.png', 'Assets/explosion6.png', 'Assets/explosion7.png', 'Assets/explosion8.png', 'Assets/explosion9.png', 'Assets/explosion10.png')
      explosionanim.frameDelay = 2;
      explosion.addAnimation('explode', explosionanim);
      explosion.lifetime = 26;
      
      playerhealth = playerhealth - 1;
    }
    if(player.y > ground.y - 61){
      playerallow = 0;
      if(sideindex ===0){
        player.changeAnimation('idleright');
      }
      if(sideindex ===1){
        player.changeAnimation('idleleft');
      }
    }
    player.velocityX = 0;
    if(keyDown("space")&& playerallow === 0){
      player.velocityY = -20;
      player.changeAnimation('jump');
      playerallow = 1;
    }
    if(keyDown('left')){
      player.x = player.x - 13;
      player.changeAnimation('runleft')
      sideindex = 1;
    }
    if(keyDown('right')){
      player.x = player.x +13;
      player.changeAnimation('runright')
      sideindex = 0;
      
    }
    if(player.isTouching(monstergroup)||player.collide(skullgroup)){
      player.changeAnimation('hurtright');
    }
    //All Controls Extra
    if(bulletgroup.isTouching(monstergroup)){
      monstergroup.destroyEach();
      score+=10;
    }
    if(bulletgroup.isTouching(skullgroup)){
      skullgroup.destroyEach();
      score+=20;
    }
    if(sideindex ===0){
      weapon('right');
    }
    if(sideindex ===1){
      weapon('left');
    }
    player.velocityY = player.velocityY + 1;
    if(score >= 20){
      gamestate = 'boss';
    }
  }
  if(gamestate === 'boss'){
    demon.visible = true;
    demon.scale = 2.4
    player.scale = 3;
    background(0,110,200); 
    textSize(40);
    fill(255, 0, 0);
    text("Score : "+score, diswidth/10, disheight/10);
    
    if(demon.x < player.x){
      demon.changeAnimation('demonfromleft');
    }
    if(demon.x > player.x){
      demon.changeAnimation('demonfromright');
    }
    if(demon.x === 100){
      demon.velocityX = 10;
    }
    if(demon.x === diswidth - 100){
      demon.velocityX = -10;
    }
    if(player.y > ground.y - 61){
      playerallow = 0;
      if(sideindex ===0){
        player.changeAnimation('idleright');
      }
      if(sideindex ===1){
        player.changeAnimation('idleleft');
      }
    }
    player.velocityX = 0;
    if(keyDown("space")&& playerallow === 0){
      player.velocityY = -20;
      player.changeAnimation('jump');
      playerallow = 1;
    }
    if(keyDown('left')){
      player.x = player.x - 13;
      player.changeAnimation('runleft')
      sideindex = 1;
    }
    if(keyDown('right')){
      player.x = player.x +13;
      player.changeAnimation('runright')
      sideindex = 0;
      
    }
    if(player.isTouching(monstergroup)||player.collide(skullgroup)){
      player.changeAnimation('hurtright');
    }
    //All Controls Extra
    if(sideindex ===0){
      weapon('right');
    }
    if(sideindex ===1){
      weapon('left');
    }
    player.velocityY = player.velocityY + 1;
  }
  drawSprites();
}
function projectile(){
  if(frameCount % 100 === 0){
    var projectile = createSprite(diswidth + 50, ground.y - 60, 10, 10);
    projectile.velocityX = -20;
  }
}
function monsters(score){
  if(score < 200){
    if(frameCount % 90 === 0){
      var monster = createSprite(diswidth + 50, ground.y -80, 30, 30);
      monster.addAnimation('runright', wolfrunright);
      monster.velocityY = monster.velocityY +10;
      monster.velocityX = -10;
      monster.scale = 2.4
      monster.lifetime = 400;
      monstergroup.add(monster);
    }
  }
}
function skulls(score){
  if(score < 200){
    if(frameCount % 100 === 0){
      var skull = createSprite(diswidth+50, ground.y -200, 30, 30);
      skull.addAnimation('skullright', skullright);
      skull.velocityX = -10;
      skull.scale = 1.3;
      skull.lifetime = 400;
      skullgroup.add(skull);
    }
  }
}
function weapon(playerside){
  if (keyDown("j")){
    if(playerside === 'right'){
      player.changeAnimation('attackright');
    }
    if(playerside === 'left'){
      player.changeAnimation('attackleft');
    }
    if(frameCount%10===0){
      
      if(playerside === 'right'){
        var bullet = createSprite(player.x+10, player.y, 10, 10);
        var touchindex = 0;
        bullet.velocityX = 28;
        bullet.addAnimation('fireright',firerightanim);
        bullet.scale = 2.5;
        bulletgroup.add(bullet)
        bullet.lifetime = 400;
      }
      if(playerside === 'left'){
        var bullet = createSprite(player.x-10, player.y, 10, 10);
        bullet.velocityX = -28;
        bullet.addAnimation('fireleft',fireleftanim);
        bullet.scale = 2.5;
        bulletgroup.add(bullet);
      }
    }
  }
  
}