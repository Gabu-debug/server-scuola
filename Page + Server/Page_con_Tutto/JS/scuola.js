//Variabili

    //var 

    var m_ms = 1000 * 60; var t_u_e = 100;
    var w_lez;                                                 //Finestre 
    var ver; var t_clas; var t_reg; var t_orario;              //Timer
    var minuti = 1; 

    var i;
    var attuale; var successiva;
    var orario_ar = [
        ["Inglese", "Religione", "Fisica", "Filosofia", "Matematica"], //Lunedì
        ["Italiano", "Italiano", "Informatica", "Fisica", "Scienze"],  //Martedì
        ["Inglese", "Scienze", "Scienze", "Matematica", "Matematica"], //Mercoledì
        ["Arte", "Arte", "Fisica", "Filosofia", "Matematica"],         //Giovedì
        ["Italiano", "Storia", "Informatica", "Scienze", "Scienze"],   //Venerdì
        ["Ginnastica", "Ginnastica", "Inglese", "Storia", "Italiano"], //Sabato
    ];

    var btn1 = {
        btn: document.createElement ("h3"),
        nome: null,
        finestra: null,
        link: null
    }

    btn1.btn.className = "l_btn_links";
    btn1.btn.id = "btn_entra1";
    btn1.btn.textContent = "Apri";

    var btn2 = {
        btn: document.createElement ("h3"),
        nome: null,
        finestra: null,
        link: null
    }

    btn2.btn.className = "l_btn_links";
    btn2.btn.id = "btn_entra2";
    btn2.btn.textContent = "Apri";


    var registro = {
        link: "https://family.axioscloud.it/Secret/REStart.aspx?Customer_ID=83005110420",
        btn: document.getElementById ("btn_registro"),
        finestra: null,
        timer: null
    };

    var classroom = {
        link: "https://classroom.google.com/u/0/h",
        btn: document.getElementById ("btn_classroom"),
        finestra: null,
        timer: null
    };

    var orario = {
        link:"http://www.liceomedi-senigallia.it/didattica/calendario-scolastico-e-orario-delle-lezioni/orario-per-classe-dal-12-ottobre-2020-al-5-giugno-2021",
        btn: document.getElementById ("btn_orario"),
        finestra: null,
        timer: null
    };


    var ing = {
        nome: "Inglese",
        meet:  "https://meet.google.com/lookup/b3yymaqqre?authuser=0&hs=179",
        class: "https://classroom.google.com/c/NzUxMzgyOTUwNDha"
    };
    var ita = {
        nome: "Italiano",
        meet:  "https://meet.google.com/lookup/ckpy4t3yyy?authuser=0&hs=179",
        class: "https://classroom.google.com/c/NzUwMTQ0MjM4NjJa"
    };
    var mat = {
        nome: "Matematica",
        meet:  "https://meet.google.com/lookup/buoeswpppp?authuser=0&hs=179",
        class: "https://classroom.google.com/c/NjM1ODk5OTM1MDFa"
    };
    var fil = {
        nome: "Filosofia",
        meet:  "https://meet.google.com/lookup/eaobe3dcfh?authuser=0&hs=179",
        class: "https://classroom.google.com/c/OTIzNTI4MzU4NjZa"
    };
    var sci = {
        nome: "Scienze",
        meet:  "https://meet.google.com/lookup/bcf6wubea7?authuser=0&hs=179",
        class: "https://classroom.google.com/c/MTY0NDIzNjY2MTc1"
    };
    var sto = {
        nome: "Storia",
        meet:  "https://meet.google.com/lookup/ej5pifey2x?authuser=0&hs=179",
        class: "https://classroom.google.com/c/OTIyNDM2ODc1MjVa"
    };
    var fis = {
        nome: "Fisica",
        meet:  "https://meet.google.com/lookup/gdmzoxgycb?authuser=0&hs=179",
        class: "https://classroom.google.com/c/MTUzNjgxOTY4Njc0"
    };
    var gin = {
        nome: "Ginnastica",
        meet:  "Il pela non usa il link fisso :|",
        class: "https://classroom.google.com/c/OTI4NDAzNTk1MTZa"
    };
    var art = {
        nome: "Arte",
        meet:  "https://meet.google.com/lookup/dvjpdpytv6?authuser=0&hs=179",
        class: "https://classroom.google.com/c/MTc2NTU1Njg3ODc3"
    };
    var inf = {
        nome: "Informatica",
        meet:  "https://meet.google.com/lookup/eb5rcocr5q?authuser=0&hs=179",
        class: "https://classroom.google.com/c/NzYzMjg4NDE0MjZa"
    };
    var rel = {
        nome: "Religione",
        meet:  "https://meet.google.com/lookup/hagfkk5or2?authuser=0&hs=179",
        class: "https://classroom.google.com/c/MTY1ODY1OTE0OTQy"
    };

    var niente = {
        nome: "Zero Bro :(",
        meet:  "Orario sbagliato zi :(",
        class: "Orario sbagliato zi :("
    };

    //Link

    var link_home   = ("Index.html");
    var link_scuola = ("scuola.html");
    var link_giochi = ("giochi.html");

    //Contenitori

        var navbar = document.getElementById ("nav_div");
        var box1   = document.getElementById ("box1");
        var scuola = document.getElementById ("div_scuola");
        var box_ll = document.getElementById ("box_ll");
        var box_e  = document.getElementById ("div_entrata");
        var footer = document.getElementById ("footer_div");

    //NavBar

        var btn_home = document.getElementById ("btn_home");

        var i_box    = document.getElementById ("i_box");

        var i_theme  = document.getElementById ("icona_tema");
        var refresh  = document.getElementById ("refre");

    //box sinistra

        var box_lezione = document.getElementById ("lezione");
        var lezione_1   = document.getElementById ("box_nobtn");
        var lezione_2   = document.getElementById ("box_btn_re");
        var lezione_a   = document.getElementById ("txt_lezione_a");
        var lezione_s   = document.getElementById ("txt_lezione_s");
        var box_links   = document.getElementById ("box_link");
        var link_1      = document.getElementById ("links_1");
        var link_2      = document.getElementById ("links_2");
        var link_3      = document.getElementById ("links_3");

    //box destra

        var box_bot   = document.getElementById ("box_bot");
        var bot_ss    = document.getElementById ("ss")

        var box_stato    = document.getElementById ("box_stato");
        var stato_stato  = document.getElementById ("txt_stato");
        var stato_mat    = document.getElementById ("txt_materia");

        //var check_box = document.getElementById ("cbx");

    //btn

        var btn_rileva  = document.getElementById  ("btn_rileva");
        var div_entra   = document.getElementById ("l_box_btn_r2")         

        var btn_start = document.getElementById ("btn_start");
        var btn_stop  = document.getElementById ("btn_stop"); 
        
        var btn_inizio = document.getElementById ("btn_inizio");
        var btn_fine   =  document.getElementById ("btn_fine");

    //footer
        var rights = document.getElementById ("rights");

//PROGRAMMA
    
    window.addEventListener   ("load", inizializza);

        function inizializza () {
            let i;
            if (localStorage.tema === "dark") {
                i = 1;
            change_theme (i);
            }
            if (localStorage.inizio_ora) {
                btn_inizio.textContent = "Inizio ora: " + localStorage.inizio_ora;
                inizio_ora = new Number (localStorage.inizio_ora);
                console.log ("gg")
            } else {
                localStorage.inizio_ora = "53";
                btn_inizio.textContent = "Inizio ora: " + localStorage.inizio_ora;
                inizio_ora = new Number (localStorage.inizio_ora);
                console.log ("wp");
            }
            if (localStorage.fine_ora)  {
                btn_fine.textContent = "Fine ora: " + localStorage.fine_ora;
                fine_ora = new Number (localStorage.fine_ora);
            } else {
                localStorage.fine_ora   = "43";
                btn_fine.textContent = "Fine ora: " + localStorage.fine_ora;
                fine_ora = new Number (localStorage.fine_ora);
            }
        }

    btn_home.addEventListener ("click", () => location.href = link_home);
    refresh.addEventListener  ("click", () => location.replace (location.href));

     
    rights.addEventListener  ("dblclick", () => open ("https://it.pornhub.com/"));

    i_theme.addEventListener  ("click", check_theme);

        function check_theme () {
            if (localStorage.tema === "light") {
                i = 1;
            } else {
                i = 0;
            }
            change_theme (i);
        }
        function change_theme (k) {
            if (k) {
                i_theme.className = "fas fa-moon fa-2x";
                localStorage.tema = "dark";
                navbar.classList.replace      ("l_container", "d_container");
                box1.classList.replace        ("l_box", "d_box");
                i_box.classList.replace       ("l_icon", "d_icon");
                scuola.classList.replace      ("l_container", "d_container");
                box_ll.classList.replace      ("l_box_lezione_link", "d_box_lezione_link");
                box_lezione.classList.replace ("l_lezione", "d_lezione");
                lezione_1.classList.replace   ("l_box_nobtn", "d_box_nobtn");
                lezione_2.classList.replace   ("l_box_btn_re", "d_box_btn_re");
                box_links.classList.replace   ("l_box_link", "d_box_link");
                link_1.classList.replace      ("l_links", "d_links");
                link_2.classList.replace      ("l_links", "d_links");
                link_3.classList.replace      ("l_links", "d_links");
                box_e.classList.replace       ("l_box_entrata", "d_box_entrata");
                box_bot.classList.replace     ("l_set", "d_set");
                bot_ss.classList.replace      ("l_box_btn_ss", "d_box_btn_ss");
                box_stato.classList.replace   ("l_stato", "d_stato");
                stato_1.classList.replace     ("l_box_stato", "d_box_stato");
                stato_2.classList.replace     ("l_box_stato", "d_box_stato");
                footer.classList.replace      ("l_container", "d_container");
                btn_rileva.classList.replace  ("l_btn_links", "d_btn_links");
                btn1.btn.classList.replace   ("l_btn_links", "d_btn_links");
                btn2.btn.classList.replace   ("l_btn_links", "d_btn_links");
                classroom.btn.classList.replace  ("l_btn_links", "d_btn_links");
                registro.btn.classList.replace ("l_btn_links", "d_btn_links");
                orario.btn.classList.replace   ("l_btn_links", "d_btn_links");
                btn_start.classList.replace    ("l_btn_links", "d_btn_links");
                btn_inizio.classList.replace ("l_btn_links", "d_btn_links");
                btn_fine.classList.replace ("l_btn_links", "d_btn_links");
            } else {
                i_theme.className = "far fa-lightbulb fa-2x";
                localStorage.tema = "light";
                navbar.classList.replace      ("d_container", "l_container");
                box1.classList.replace        ("d_box", "l_box");
                i_box.classList.replace       ("d_icon", "l_icon");
                scuola.classList.replace      ("d_container", "l_container");
                box_ll.classList.replace      ("d_box_lezione_link", "l_box_lezione_link");
                box_lezione.classList.replace ("d_lezione", "l_lezione");
                lezione_1.classList.replace   ("d_box_nobtn", "l_box_nobtn");
                lezione_2.classList.replace   ("d_box_btn_re", "l_box_btn_re");
                box_links.classList.replace   ("d_box_link", "l_box_link");
                link_1.classList.replace      ("d_links", "l_links");
                link_2.classList.replace      ("d_links", "l_links");
                link_3.classList.replace      ("d_links", "l_links");
                box_e.classList.replace       ("d_box_entrata", "l_box_entrata");
                box_bot.classList.replace     ("d_set", "l_set");
                bot_ss.classList.replace      ("d_box_btn_ss", "l_box_btn_ss");
                box_stato.classList.replace   ("d_stato", "l_stato");
                stato_1.classList.replace     ("d_box_stato", "l_box_stato");
                stato_2.classList.replace     ("d_box_stato", "l_box_stato");
                footer.classList.replace      ("d_container", "l_container");
                btn_rileva.classList.replace  ("d_btn_links", "l_btn_links");
                btn1.btn.classList.replace   ("d_btn_links", "l_btn_links");
                btn2.btn.classList.replace   ("d_btn_links", "l_btn_links");
                classroom.btn.classList.replace  ("d_btn_links", "l_btn_links");
                registro.btn.classList.replace ("d_btn_links", "l_btn_links");
                orario.btn.classList.replace   ("d_btn_links", "l_btn_links");
                btn_start.classList.replace    ("d_btn_links", "l_btn_links");
                btn_inizio.classList.replace   ("d_btn_links", "l_btn_links");
                btn_fine.classList.replace     ("d_btn_links", "l_btn_links");
            }
        }

    classroom.btn.addEventListener ("click", apri_u);
    registro.btn.addEventListener  ("click", apri_u);
    orario.btn.addEventListener    ("click", apri_u);

        function apri_u (e) {
            switch (e.target) {
                case classroom.btn: 
                    if (e.ctrlKey) {
                        let mate = prompt("Di che materia vuoi aprire il classroom? ").toLowerCase();
                        switch (mate) {
                            case "inglese"     : open (ing.class); break;
                            case "italiano"    : open (ita.class); break;
                            case "matematica"  : open (mat.class); break;
                            case "ginnastica"  : open (gin.class); break;
                            case "fisica"      : open (fis.class); break;
                            case "religione"   : open (rel.class); break;
                            case "informatica" : open (inf.class); break;
                            case "filosofia"   : open (fil.class); break;
                            case "scienze"     : open (sci.class); break;
                            case "storia"      : open (sto.class); break;
                            case "arte"        : open (art.class); break;
                            default: if (confirm ("Materia sbagliata, aprire classroom?")) apri_utility(classroom); break;
                        }
                    } else if (e.altKey) {
                        open ("https://drive.google.com")
                    } else {
                        apri_utility (classroom);
                    } 
                break;
                case registro.btn : apri_utility (registro);  break;
                case orario.btn   : apri_utility (orario);    break;
            } 
        }
            function apri_utility (obj) {
                console.log ("ciao");
                obj.finestra = open (obj.link);
                obj.btn.textContent ="Chiudi";
                obj.btn.removeEventListener ("click", apri_u);
                obj.btn.addEventListener ("click",  chiudi_u);
            }
        
        function chiudi_u (e) {
            switch (e.target) {
                case classroom.btn: chiudi_utility (classroom); break;
                case registro.btn : chiudi_utility (registro);  break;
                case orario.btn   : chiudi_utility (orario);    break;
            }
        }
            function chiudi_utility (obj) {   
                obj.finestra.close();
                obj.btn.textContent = "Apri";
                obj.btn.removeEventListener ("click", chiudi_u);
                obj.btn.addEventListener ("click", apri_u);
            }

    
    btn_rileva.addEventListener ("click", rileva);

        function rileva () {
                attuale    = materia ("a");
                successiva = materia ("s");
                if (!lezione_a.textContent === "...") {
                    div_entra.removeChild (btn_entra1);
                    lezione_2.removeChild (btn_entra2);
                }
                lezione_a.textContent = attuale.nome;
                lezione_s.textContent = successiva.nome;
                div_entra.appendChild (btn1.btn);
                lezione_2.appendChild (btn2.btn);
                btn1.nome = attuale.nome;
                btn1.link = attuale.meet;
                btn2.nome = successiva.nome;
                btn2.link = successiva.meet;
                btn1.btn.addEventListener ("click", entra_c);
                btn2.btn.addEventListener ("click", entra_c);
        }

            function entra_c (e) {
                console.log (e.target);
                switch (e.target) {
                    case btn1.btn: entra (btn1); break;
                    case btn2.btn: entra (btn2); break;
                }
            }
                function entra (obj) {
                    console.log (obj.nome);
                    switch (obj.nome) {
                        case "Ginnastica": 
                            alert (obj.link);
                            open (gin.class);
                        break;
                        case "Zero Bro :(":
                            alert (obj.nome);
                        break;
                        default:
                            obj.finestra = open (obj.link);
                            obj.btn.textContent = "Chiudi";
                            obj.btn.removeEventListener ("click", entra_c);
                            obj.btn.addEventListener    ("click", esci_c);
                        break;
                    }
                }

            function esci_c (e) {
                switch (e.target) {
                    case btn1.btn: esci (btn1); break;
                    case btn2.btn: esci (btn2); break;
                }
            }
                function esci (obj) {
                    obj.finestra.close();
                    obj.btn.textContent = "Apri";
                    obj.btn.removeEventListener ("click", esci_c);
                    obj.btn.addEventListener    ("click", entra_c);
                }
    
    setInterval (verifica_u_e, t_u_e);

        function verifica_u_e () {
            if (registro.finestra)  {if (registro.finestra.closed)  chiudi_utility (registro)};
            if (classroom.finestra) {if (classroom.finestra.closed) chiudi_utility (classroom)};
            if (orario.finestra)  {if (orario.finestra.closed)    chiudi_utility (orario)};
            if (btn1.finestra)  {if (btn1.finestra.closed)      esci (btn1)};
            if (btn2.finestra)  {if (btn2.finestra.closed)      esci (btn2)};
        }

    btn_start.addEventListener ("click", bot_start);

        function bot_start () {
            ver = setInterval (verifica_bot, m_ms);
            apri_lez();
            open (registro.link);
            btn_start.textContent = "Stop";
            stato_stato.textContent = "On"
            btn_start.removeEventListener ("click", bot_start);
            btn_start.addEventListener ("click", bot_stop);
            if (materia("a").nome == "Zero Bro :(") {
                bot_stop(); 
            }
        }
        function bot_stop () {
            clearInterval (ver);
            chiudi_lez();
            btn_start.textContent = "Start";
            stato_stato.textContent = "Off";
            stato_mat.textContent = "/";
            btn_start.removeEventListener ("click", bot_stop);
            btn_start.addEventListener ("click", bot_start);
        }
        function apri_lez () {
            let mate = materia("a");
            switch (mate.nome) {
                case "Ginnastica": 
                    alert (mate.meet);
                    w_cla = open (mate.class);
                    stato_mat.textContent = mate.nome;
                break;
                case "Zero Bro :(":
                    alert (mate.meet);
                    bot_stop();
                break;
                default:
                    w_cla = open (mate.class);
                    w_lez = open (mate.meet);
                    stato_mat.textContent = mate.nome;
                break;
            }
            w_lez.focus();
        }
        function chiudi_lez () {
            if (w_lez) {
                w_lez.close ();
            }
            if (w_cla) {
                w_cla.close ();
            }
        }
        function verifica_bot () {
            let mate = materia ("a");
            let succ = materia ("s");
            let prec = materia ("p");
            let d = new Date();
            minuti = d.getMinutes();
            if (minuti >= fine_ora  && minuti <= inizio_ora) {
                stato_mat.textContent = "Pausa"
                if (mate.nome != prec.nome) {
                    if (w_lez || w_cla) {
                        chiudi_lez();
                    }
                    if (minuti >= inizio_ora) {
                        apri_lez();
                    }
                }
            }
        }
        function materia (s) {
            let d = new Date;
            let m = d.getMinutes ();
            let h = d.getHours ();
            let g = d.getDay ();
            if (m >= fine_ora) {h+=1};
            h -= 8;
            g -= 1;
            switch (s) {    
                case "a":
                    return obj_materia (orario_ar, g, h);
                case "p":
                    h -= 1;
                    return obj_materia (orario_ar, g, h);
                case "s":
                    h += 1;
                    return obj_materia (orario_ar, g, h);
            }
        }
        function obj_materia (orario, g, h) {
            if (orario [g][h]) {
                switch (orario [g][h]) {
                    case "Italiano":   return ita;
                    case "Matematica": return mat;
                    case "Inglese":    return ing;
                    case "Storia":     return sto;
                    case "Ginnastica": return gin;
                    case "Arte":       return art;
                    case "Scienze":    return sci;
                    case "Informatica":return inf;
                    case "Fisica":     return fis;
                    case "Filosofia":  return fil;
                    case "Religione":  return rel;
                    default: return niente;
                }
            } else {
                return niente;
            }
        }

    btn_inizio.addEventListener ("click", () => {
        localStorage.inizio_ora = prompt ("Imposta orario di inizio lezione: ");
        btn_inizio.textContent  = `Inizo Ora: ${localStorage.inizio_ora}`; 
        var inizio_ora = new Number (localStorage.inizio_ora);
    });
    btn_fine.addEventListener   ("click", () => {
        localStorage.fine_ora = prompt ("Imposta orario di fine lezione: ")
        btn_fine.textContent  = `Fine Ora: ${localStorage.fine_ora}`; 
        var fine_ora = new Number (localStora.fine_ora);
    });


    window.addEventListener ("unload", chiudi_windows);
    
        function chiudi_windows () {
            //if (check_box.checked) {
                bot_stop();
                if (w_clas) {w_clas.close()};
                if (w_reg) {w_reg.close()};
                if (w_orario) {w_orario.close()};
            //}
        }