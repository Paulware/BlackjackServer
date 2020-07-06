//Code that will run automatically
  events.playerJoin( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    if (((exports.gameId) == (null))){
      exports.cardDeck = ['clubs-a', 'clubs-2', 'clubs-3', 'clubs-4','clubs-5', 'clubs-6', 'clubs-7', 'clubs-8','clubs-9', 'clubs-10', 'clubs-j', 'clubs-q','clubs-k','hearts-a', 'hearts-2', 'hearts-3', 'hearts-4','hearts-5', 'hearts-6', 'hearts-7', 'hearts-8','hearts-9', 'hearts-10', 'hearts-j', 'hearts-q','hearts-k','spades-a', 'spades-2', 'spades-3', 'spades-4','spades-5', 'spades-6', 'spades-7', 'spades-8','spades-9', 'spades-10', 'spades-j', 'spades-q','spades-k','diamonds-a', 'diamonds-2', 'diamonds-3', 'diamonds-4','diamonds-5', 'diamonds-6', 'diamonds-7', 'diamonds-8','diamonds-9', 'diamonds-10', 'diamonds-j', 'diamonds-q','diamonds-k'];
      exports.gameId=new Date().getTime();
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setworldspawn 499 23 484");
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setspawn 499 23 484");
    }
    player.getInventory().clear();
    player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,100) );
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamemode survival " + player.name);
    setTimeout (function () {
      player.teleport(new org.bukkit.Location(server.worlds[0], 499, 23, 484), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
    },2000);
  });
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
    if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_BUTTON))){
      console.log ("click on a wall-button yo");
      location=block.location;
      block=server.worlds[0].getBlockAt ((function() { var _x = location.x + 0;var _y = location.y + -1;var _z = location.z + -1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })());
      if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_WALL_SIGN))){
        console.log ("Check text on sign and act accordingly");
        text=(block==null)?null: (block.state.getLine == null)?null:block.state.getLine(0);
        console.log ("Got Text: " + text);
        if (((text) == ("Hit"))){
          elapsedTime=(function () {
             var _startTime = (player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("timerNameYo").length == 0)?null:player.getMetadata("timerNameYo")[0].value();
             var _elapsedTime = (new Date().getTime()) - _startTime;
             console.log ( 'Elapsed Time: ' + _elapsedTime + ' ms');
             return _elapsedTime;
          }());;
          if (((elapsedTime) > (1000))){
            sum=(function () {
               var _inventory = player.getInventory();
               var _sum=0;
               var _name;
               var _index;
               var _ch;
               var _ch2;
               var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};
               for (var _i=0; _i<9; _i++) {
                 _name=(player.getInventory().getItem(_i)== null) ? null : (player.getInventory().getItem(_i).getItemMeta == null) ? null : (player.getInventory().getItem(_i).getItemMeta() == null)?null:player.getInventory().getItem(_i).getItemMeta().getDisplayName();
                 if (_name != null) {
                    _index = _name.indexOf ( '-');
                    _ch  = _name.charAt (_index+1);
                    _ch2 = _name.charAt (_index+2);
                    //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');
                    _sum = _sum  + _values[_ch] + _values[_ch2];
                    //console.log ( '_sum: ' + _sum );
                 }
               }
               if ((_ch == 'a') && (_sum <= 11)) {
                  _sum = _sum + 10;
               }
               console.log ( 'Got a sum of: ' + _sum );
               return _sum;
            }());;
            if (((sum) > 21)){
              (function() {
                if (player != null ) {
                   player.sendMessage ("Sorry you have lost");
                }
               })();
            }
            else {
              randomCard=(function () {var _length = exports.cardDeck.length;
                 var _index = parseInt (Math.random () * _length );
                 var _card = exports.cardDeck.splice (_index,1);
                 console.log ( 'dealt a: ' + _card);
                 return _card;
              }());;
              inventory=player.getInventory();
              inventory.addItem ((function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.PAPER,1);  var m = s.getItemMeta();  m.setDisplayName (randomCard);  s.setItemMeta(m);  return s; })());
              sum=(function () {
                 var _inventory = player.getInventory();
                 var _sum=0;
                 var _name;
                 var _index;
                 var _ch;
                 var _ch2;
                 var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};
                 for (var _i=0; _i<9; _i++) {
                   _name=(player.getInventory().getItem(_i)== null) ? null : (player.getInventory().getItem(_i).getItemMeta == null) ? null : (player.getInventory().getItem(_i).getItemMeta() == null)?null:player.getInventory().getItem(_i).getItemMeta().getDisplayName();
                   if (_name != null) {
                      _index = _name.indexOf ( '-');
                      _ch  = _name.charAt (_index+1);
                      _ch2 = _name.charAt (_index+2);
                      //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');
                      _sum = _sum  + _values[_ch] + _values[_ch2];
                      //console.log ( '_sum: ' + _sum );
                   }
                 }
                 if ((_ch == 'a') && (_sum <= 11)) {
                    _sum = _sum + 10;
                 }
                 console.log ( 'Got a sum of: ' + _sum );
                 return _sum;
              }());;
              (function() {
                if (player != null ) {
                   player.sendMessage ("You have a sum of: " + sum);
                }
               })();
              (function () {
                // timerName = "timerNameYo";
                fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,new Date().getTime());
                if (player != null) {
                  if (player.setMetadata != null ) {
                     player.setMetadata ("timerNameYo", fd );
                  }
                }
              }());
              if (((sum) > 21)){
                (function() {
                  if (player != null ) {
                     player.sendMessage ("Sorry you have lost");
                  }
                 })();
              }
            }
          }
        }
        else if (((text) == ("Bet"))){
          bet=(function () {
             var _sum=0;
             var _index;
             var _stack;
             var _stackType;
             var _inventory = player.getInventory().getContents();
             var _count = 0;
             for (var _i=0; _i<_inventory.length; _i++)  {
                _stack = _inventory[_i];
                _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();
                // console.log ( _i + "): " + _stackType );
                if (_stackType == org.bukkit.Material.EMERALD ){
                   _count = _count + _stack.getAmount();
                }
                if (_i == 8) { break; }
             }
             console.log ( "Got a bet of:" + _count + " emeralds." );
             return _count;})();
          if (((bet) < 2)){
            (function() {
              if (player != null ) {
                 player.sendMessage ("2 Emerald minumum sir");
              }
             })();
          }
          else {
            (function() {
              if (player != null ) {
                 player.sendMessage ("You have bet " + bet + " emeralds");
              }
             })();
            for (var _hotbarIndex=0; _hotbarIndex<9; _hotbarIndex++)  {
              player.getInventory().setItem (_hotbarIndex,new org.bukkit.inventory.ItemStack (org.bukkit.Material.AIR,1) );
            }
            inventory=player.getInventory();
            randomCard=(function () {var _length = exports.cardDeck.length;
               var _index = parseInt (Math.random () * _length );
               var _card = exports.cardDeck.splice (_index,1);
               console.log ( 'dealt a: ' + _card);
               return _card;
            }());;
            inventory.addItem ((function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.PAPER,1);  var m = s.getItemMeta();  m.setDisplayName (randomCard);  s.setItemMeta(m);  return s; })());
            randomCard=(function () {var _length = exports.cardDeck.length;
               var _index = parseInt (Math.random () * _length );
               var _card = exports.cardDeck.splice (_index,1);
               console.log ( 'dealt a: ' + _card);
               return _card;
            }());;
            inventory.addItem ((function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.PAPER,1);  var m = s.getItemMeta();  m.setDisplayName (randomCard);  s.setItemMeta(m);  return s; })());
            randomCard=(function () {var _length = exports.cardDeck.length;
               var _index = parseInt (Math.random () * _length );
               var _card = exports.cardDeck.splice (_index,1);
               console.log ( 'dealt a: ' + _card);
               return _card;
            }());;
            sum=(function () {
               var _inventory = player.getInventory();
               var _sum=0;
               var _name;
               var _index;
               var _ch;
               var _ch2;
               var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};
               for (var _i=0; _i<9; _i++) {
                 _name=(player.getInventory().getItem(_i)== null) ? null : (player.getInventory().getItem(_i).getItemMeta == null) ? null : (player.getInventory().getItem(_i).getItemMeta() == null)?null:player.getInventory().getItem(_i).getItemMeta().getDisplayName();
                 if (_name != null) {
                    _index = _name.indexOf ( '-');
                    _ch  = _name.charAt (_index+1);
                    _ch2 = _name.charAt (_index+2);
                    //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');
                    _sum = _sum  + _values[_ch] + _values[_ch2];
                    //console.log ( '_sum: ' + _sum );
                 }
               }
               if ((_ch == 'a') && (_sum <= 11)) {
                  _sum = _sum + 10;
               }
               console.log ( 'Got a sum of: ' + _sum );
               return _sum;
            }());;
            (function() {
              if (player != null ) {
                 player.sendMessage ("You have a sum of: " + sum);
              }
             })();
            (function() {
              if (player != null ) {
                 player.sendMessage ("Dealer shows " + randomCard);
              }
             })();
            exports.dealerCard=randomCard;
            fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,bet);
            if (player != null) {
              if (player.setMetadata != null ) {
                player.setMetadata ("_bet_", fd );
              }
            }
          }
        }
        else if (((text) == ("Stand"))){
          playerSum=(function () {
             var _inventory = player.getInventory();
             var _sum=0;
             var _name;
             var _index;
             var _ch;
             var _ch2;
             var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};
             for (var _i=0; _i<9; _i++) {
               _name=(player.getInventory().getItem(_i)== null) ? null : (player.getInventory().getItem(_i).getItemMeta == null) ? null : (player.getInventory().getItem(_i).getItemMeta() == null)?null:player.getInventory().getItem(_i).getItemMeta().getDisplayName();
               if (_name != null) {
                  _index = _name.indexOf ( '-');
                  _ch  = _name.charAt (_index+1);
                  _ch2 = _name.charAt (_index+2);
                  //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');
                  _sum = _sum  + _values[_ch] + _values[_ch2];
                  //console.log ( '_sum: ' + _sum );
               }
             }
             if ((_ch == 'a') && (_sum <= 11)) {
                _sum = _sum + 10;
             }
             console.log ( 'Got a sum of: ' + _sum );
             return _sum;
          }());;
          if (((playerSum) > 21)){
            (function() {
              if (player != null ) {
                 player.sendMessage ("Sorry you already lost yo");
              }
             })();
          }
          else {
            dealerSum=(function () {
               var _count = 0;
               var _sum = 0;
               var _length;
               var _index;
               var _card;
               var _name;
               var _ch;
               var _ch2;
               var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};
               console.log ( "Got a first card of: " + exports.dealerCard);
               var _cards = [exports.dealerCard];
               while (_sum < 17) {
                  _sum = 0;
                  // Dealer gets a random card
                  _length = exports.cardDeck.length;
                  _index = parseInt (Math.random () * _length );
                  _card = exports.cardDeck.splice (_index,1);
                  console.log ( 'dealt dealer a: ' + _card);
                  _cards.push ( _card );
                  // sum _cards
                  for (var _i=0; _i<_cards.length; _i++) {
                    //console.log ( '_cards[_i]: [' + _cards[_i] + ']');
                    _name = _cards[_i].toString();
                    _index = _name.indexOf ('-');
                    //console.log ( '_name: [' + _name + '], _index:' + _index);
                    _ch  = _name.charAt (_index+1);
                    _ch2 = _name.charAt (_index+2);
                    //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');
                    _sum = _sum  + _values[_ch] + _values[_ch2];
                    //console.log ( 'dealer _sum: ' + _sum );
                  }
                  if ((_ch == 'a') && (_sum <= 11)) {
                     _sum = _sum + 10;
                  }
                  console.log ( 'Got a dealer sum of: ' + _sum );
               }
               return _sum;})();
            if (((dealerSum) > 21)){
              gain=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_bet_").length == 0)?null:player.getMetadata("_bet_")[0].value();
              (function() {
                if (player != null ) {
                   player.sendMessage ("Dealer Busted on " + dealerSum);
                }
               })();
              (function() {
                if (player != null ) {
                   player.sendMessage ("You gain " + gain);
                }
               })();
              for (var _hotbarIndex=0; _hotbarIndex<9; _hotbarIndex++)  {
                player.getInventory().setItem (_hotbarIndex,new org.bukkit.inventory.ItemStack (org.bukkit.Material.AIR,1) );
              }
              player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,gain) );
              player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,gain) );
            }
            else if (((dealerSum) > (playerSum))){
              (function() {
                if (player != null ) {
                   player.sendMessage ("Sorry dealer wins with: " + dealerSum);
                }
               })();
            }
            else if (((dealerSum) < (playerSum))){
              gain=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_bet_").length == 0)?null:player.getMetadata("_bet_")[0].value();
              (function() {
                if (player != null ) {
                   player.sendMessage ("You gain " + gain + " emeralds!");
                }
               })();
              for (var _hotbarIndex=0; _hotbarIndex<9; _hotbarIndex++)  {
                player.getInventory().setItem (_hotbarIndex,new org.bukkit.inventory.ItemStack (org.bukkit.Material.AIR,1) );
              }
              player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,gain) );
              player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,gain) );
            }
            else {
              (function() {
                if (player != null ) {
                   player.sendMessage ("Dealer pushes with: " + dealerSum);
                }
               })();
              winnings=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_bet_").length == 0)?null:player.getMetadata("_bet_")[0].value();
              (function() {
                if (player != null ) {
                   player.sendMessage ("You get back your origin bet of  " + winnings );
                }
               })();
              for (var _hotbarIndex=0; _hotbarIndex<9; _hotbarIndex++)  {
                player.getInventory().setItem (_hotbarIndex,new org.bukkit.inventory.ItemStack (org.bukkit.Material.AIR,1) );
              }
              player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,winnings) );
            }
          }
        }
      }
    }
  });
