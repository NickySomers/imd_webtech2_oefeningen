        //        var todo1 = document.getElementById("item1");
        //        var todo2 = document.getElementById("item2");
        //        
        //        todo1.style.textDecoration = "line-through";
        //        todo2.style.textDecoration = "line-through";
        //    
        //--------------------------------------------------------------------------------

        //        function markAsDone(el, completed){
        //            
        //            document.getElementById(el).style.textDecoration = "line-through";
        //            
        //            if(completed){
        //                
        //                document.getElementById(el).style.color = "red";
        //                
        //            }
        //        }
        //        
        //        markAsDone("item1", "true");
        //        markAsDone("item1", "false");

        //--------------------------------------------------------------------------------



        //       var $ = function(sel){
        //           
        //           var elements = document.querySelectorAll(sel);
        //           
        //           if(elements.length == 1){
        //            return elements[0];
        //           }else{
        //               return elements;
        //           }
        //           
        //       }


        //--------------------------------------------------------------------------------      


        function Wrapper(el) {

            this.el = el;
            this.isArray = el.length > 1 ? true : false;

        }


        Wrapper.prototype.val = function () {


                    return this.el.nodeValue;


        }


        Wrapper.prototype.css = function (prop, val) {

            if (this.isArray) {

                for (var i = 0; i < this.el.length; i++) {

                    this.el[i].style[prop] = val;

                }

            } else {

                this.el[0].style[prop] = val;

            }
            
            return this;

        }


        Wrapper.prototype.on = function (event, callback) {
            
            if (this.isArray) {

                for (var i = 0; i < this.el.length; i++) {

                    this.el[i].addEventListener(event, callback);

                }

            } else {

                this.el.addEventListener(event, callback);

            }
            
            return this;
          
        }



        var $ = function (sel) {
            
            console.log(typeof(sel));

            var elements = document.querySelectorAll(sel);

            return new Wrapper(elements);

        }