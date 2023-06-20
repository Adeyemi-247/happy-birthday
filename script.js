$("button").click(function () {
        if ($(".name").val() != "Adepoju Folasade") {
            $("body").find(".error").remove()
            $("body").prepend(`
            <div class="error">
            You are not the celebrant!!
            </div>
            `)
            return
        }

        $("body").find(".error").remove()
        let music = $("audio")
        console.log(music);
        $(this).remove();
        let name = $(".name").val()
        $(".name").remove();
        $("h1").empty();
        let num = Math.floor((Math.random() * 200) + 180);
        let colors = ['red', 'yellow', 'green', 'blue', 'violet', 'indigo', 'aqua'];
        for (let i = 0; i <= num; i++) {
            let top = Math.floor((Math.random() * $(window).height() - 50) + 10);
            let left = Math.floor((Math.random() * $(window).width() - 30) + 10);
            let color = Math.floor((Math.random() * colors.length));
            setInterval(() => {
                $("body").prepend(` <i class="fas fa-wand-magic"style="position: absolute; top: ${top}px; left: ${left}px; color: ${colors[color]};"> < /i> `);
            }, 300);
        }
        $(".modal").show()
        $("body").css({
            background: "black"
        });
        var app = document.querySelector('.modal');

        var typewriter = new Typewriter(app, {
                delay: 5
            }

        );
        typewriter.typeString('<h1>Happy Birthday to' + " " + name + "</h1><br>").pauseFor(300).typeString('MY FRIEND<br> Shall I compare thee to ally <br> Thou who shuns bully<br> One who embraces homily <br>What a friend she is!<br><br>').pauseFor(200).typeString('A friend with good deal<br> One who is spirit filled <br>Godless is her bedrock<br> In faith she works <br>What a friend she is!<br><br>').pauseFor(200).typeString("Thanks for being my friend <br>Friendship that won 't end <br>Which death cannot comprehend<br> What a friend she is!").pauseFor(200).start()
    }

)
