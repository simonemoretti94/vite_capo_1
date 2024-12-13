import { reactive } from 'vue';

export const state = reactive({

    /* modules variables */

    // Multiple answers variables

    module_1: true,
    module_2: true,
    module_3: true,
    module_4: true,
    module_5: true,

    // True or false variables

    module_tf_1: true,

    /* modules data */

    // Multiple answers questions

    multiple_prevenction_b1s: [
        [
            'module_1'
        ],
        [
            [
                1, 1, 'Le polveri espletano il loro effetto estinguente per:', 'soffocamento, raffreddamento', 'soffocamento, azione Meccanica, raffreddamento, diluizione', 'soffocamento, raffreddamento e catalisi negativa', 'c', '2024-08-26 12:43:05', '2024-08-26 12:43:05'
            ],
            [
                2, 2, 'Si definiscono combustibili:', 'le sostanze che reagiscono con un comburente dando luogo alla combustione', 'le sostanze solide e liquide', 'le sostanze reagenti con liquidi o gas', 'a', '2024-08-26 12:44:31', '2024-08-26 12:44:31'
            ],
            [
                3, 3, 'La sigla \"34A-233B-C\" posta sull\'etichetta dell\'estintore, indica:', 'le classi d\'incendio su cui l\'estintore può essere utilizzato e la capacità di estinzione', 'il peso totale dell\'estintore', 'il tipo di propellente usato per la pressurizzazione', 'a', '2024-08-26 12:45:48', '2024-08-26 12:45:48'
            ],
            [
                4, 4, 'Durante lo stendimento di una tubazione il raccordo maschio va sempre portato:', 'in direzione della risorsa idrica', 'in direzione dell\'incendio', 'come capita', 'b', '2024-08-26 12:48:33', '2024-08-26 12:48:33'
            ],
            [
                6, 5, 'Gli estintori sono misure di:', 'protezione passiva', 'protezione attiva', 'prevenzione', 'b', '2024-08-26 12:53:11', '2024-08-26 12:53:11'
            ],
            [
                7, 6, 'Negli incendi, l\'utilizzo di acqua frazionata favorisce:', 'il soffocamento dell\'incendio', 'l\'abbassamento della temperatura', 'la catalisi negativa dell\'incendio', 'b', '2024-08-26 12:54:57', '2024-08-26 12:54:57'
            ],
            [
                8, 7, 'La presenza di ossido di carbonio si percepisce da:', 'odore di mandorle', 'solo con strumentazione', 'presenza di fumi di colore grigio', 'b', '2024-08-27 04:16:17', '2024-08-27 04:16:17'
            ],
            [
                9, 8, 'Fra i D.P.I. non sono compresi:', 'i guanti', 'gli autorespiratori', 'le asce antincendio', 'c', '2024-08-27 05:03:07', '2024-08-27 05:03:07'
            ],
            [
                10, 9, 'I D.P.I. devono essere indossati:', 'prima di salire sul mezzo', 'durante il tragitto', 'dopo essere giunti sul posto', 'a', '2024-08-27 05:03:47', '2024-08-27 05:03:47'
            ],
            [
                11, 10, 'La schiuma spegne l\'incendio:', 'esclusivamente per raffreddamento', 'per separazione liquido infiammabile aria', 'per inertizzazione del liquido infiammabile', 'b', '2024-08-27 05:04:17', '2024-08-27 05:04:17'
            ],
            [
                12, 11, 'La polvere:', 'può entrare sempre in contatto con la schiuma', 'non può assolutamente entrare in contatto con la schiuma', 'può entrare in contatto con la schiuma solo se compatibile', 'c', '2024-08-27 05:05:42', '2024-08-27 05:05:42'
            ],
            [
                13, 12, 'La schiuma:', 'è una miscela formata da acqua, liquido schiumogeno, aria', 'è una miscela formata 50% da acqua e 50% da liquido schiumogeno', 'è una miscela formata da acqua, azoto, liquido schiumogeno', 'a', '2024-08-27 05:06:05', '2024-08-27 05:06:05'
            ],
            [
                14, 13, 'Gli estinguenti complementari ammessi dall\'I.C.A.O. sono:', 'polveri  chimiche', 'CO2,  halon', 'una combinazione di a) e b)', 'a', '2024-08-27 05:06:42', '2024-08-27 05:06:42'
            ],
            [
                15, 14, 'La migliore efficacia estinguente di una schiuma si ha se essa è erogata:', 'a getto indiretto', 'a getto diretto', 'non c\'è differenza di efficacia', 'a', '2024-08-27 05:07:02', '2024-08-27 05:07:02'
            ],
            [
                16, 15, 'La percentuale di acqua nei liquidi schiumogeni è:', 'almeno il 75%', 'almeno il 90%', 'meno del 65%', 'a', '2024-08-27 05:07:24', '2024-08-27 05:07:24'
            ],
            [
                17, 16, 'Quali delle seguenti coppie di grandezze fisiche decide l’andamento di un incendio:', 'pressione e volume dei gas di combustione', 'temperatura e tempo', 'calore e dilatazione termica', 'b', '2024-08-27 05:07:56', '2024-08-27 05:07:56'
            ],
            [
                18, 17, 'La maggior parte delle  sostanze combustibili è composta da:', 'C ed H', 'C ed O²', 'H² ed O²', 'a', '2024-08-27 05:11:00', '2024-08-27 05:11:00'
            ],
            [
                19, 18, 'Un automezzo antincendio aeroportuale deve raggiungere da fermo ed a motore freddo la velocità di 80 Km/h in:', '5 sec.', '2 min.', 'un tempo inferiore ad un minuto', 'c', '2024-08-27 05:14:06', '2024-08-27 05:14:06'
            ],
            [
                20, 19, 'La sigla degli schiumogeni fluorositetici di tipo filmante è:', 'A.F.F.F.', 'A.A.F.F.', 'R.F.F.', 'a', '2024-08-27 05:14:31', '2024-08-27 05:14:31'
            ],
            [
                21, 20, 'L’acqua come sostanza estinguente agisce per:', 'raffreddamento', 'effetto meccanico', 'raffreddamento, effetto meccanico, soffocamento', 'c', '2024-08-27 05:14:56', '2024-08-27 05:14:56'
            ],
            [
                22, 21, 'La combustione avviene:', 'con fumo e fiamma', 'con fiamma', 'con fumo', 'a', '2024-08-27 05:15:32', '2024-08-27 05:15:32'
            ],
            [
                23, 22, 'Gli elementi che caratterizzano la combustione sono:', 'temperatura e pressione', 'combustibile, azoto, innesco', 'combustibile, comburente, innesco', 'c', '2024-08-27 05:15:52', '2024-08-27 05:15:52'
            ],
            [
                24, 23, 'Le categorie dei liquidi infiammabili dipendono:', 'dagli estinguenti utilizzati', 'dalle classi d’incendio', 'dalla temperatura d’infiammabilità', 'c', '2024-08-27 05:16:16', '2024-08-27 05:16:16'
            ],
            [
                25, 24, 'La catalisi negativa è:', 'interruzione della combustione', 'interruzione chimica della reazione di ossidazione', 'interruzione del processo di evaporazione dell’acqua', 'b', '2024-08-27 05:16:41', '2024-08-27 05:16:41'
            ],
            [
                26, 25, 'La percentuale di ossigeno nell\'aria, affinché sia respirabile, è:', '30%', '21%', '10%', 'b', '2024-08-27 05:17:08', '2024-08-27 05:17:08'
            ],
            [
                27, 26, 'Un incendio si può considerare spento se è bruciato:', 'il 100% del combustibile', 'il 95% del combustibile', 'il 30% del combustibile', 'a', '2024-08-27 05:17:38', '2024-08-27 05:17:38'
            ],
            [
                28, 27, 'La pressione massima di ricarica delle bombole d’aria degli autorespiratori è:', '400/500 atm', '200/300 atm', '50/100 atm', 'b', '2024-08-27 05:17:59', '2024-08-27 05:17:59'
            ],
            [
                29, 28, 'Un estintore  a CO2 produce un abbassamento della temperatura durante l’uso, a causa:', 'della capacità della bombola', 'della rapida vaporizzazione e successiva espansione del gas', 'della sezione di uscita della bombola', 'b', '2024-08-27 05:18:20', '2024-08-27 05:18:20'
            ],
            [
                30, 29, 'Un filtro è polivalente se protegge da:', 'un solo gas', 'più di un gas', 'tutti i gas tossici', 'b', '2024-08-27 05:18:42', '2024-08-27 05:18:42'
            ],
            [
                31, 30, 'Il rischio di un evento incidentale è definito da:', 'frequenza', 'magnitudo', 'frequenza x magnitudo', 'c', '2024-08-27 05:19:07', '2024-08-27 05:19:07'
            ],
            [
                32, 31, 'Quali caratteristiche devono avere i mezzi antincendio aeroportuali?', 'colorazione rossa', 'rispettare il Codice della Strada', 'avere elevata accelerazione e velocità', 'c', '2024-08-27 05:19:29', '2024-08-27 05:19:29'
            ],
            [
                33, 32, 'Il potere calorifico superiore per le sostanze gassose si misura:', 'a volume costante', 'a pressione costante', 'a pressione e volume costanti', 'b', '2024-08-27 05:19:58', '2024-08-27 05:19:58'
            ],
            [
                34, 33, 'La temperatura di un corpo caldo si misura con:', 'termostato', 'igrometro', 'termometro', 'c', '2024-08-27 05:20:19', '2024-08-27 05:20:19'
            ],
            [
                35, 34, 'In una combustione non è necessario:', 'combustibile', 'comburente', 'sostanza inerte', 'c', '2024-08-27 05:20:45', '2024-08-27 05:20:45'
            ],
            [
                36, 35, 'Su quali incendi non è efficace l’uso di sola acqua?', 'legname', 'benzina e kerosene', 'prodotti cartacei', 'b', '2024-08-27 05:22:20', '2024-08-27 05:22:20'
            ],
            [
                37, 36, 'In un incendio di liquidi infiammabili bruciano:', 'i vapori emessi dal combustibile', 'i vapori emessi dal comburente', 'i vapori emessi dall’azoto', 'a', '2024-08-27 05:22:44', '2024-08-27 05:22:44'
            ],
            [
                38, 37, 'L’uso di acqua frazionata negli incendi favorisce:', 'la modifica del comburente', 'l’assorbimento del calore', 'la diluizione del combustibile', 'b', '2024-08-27 05:23:06', '2024-08-27 05:23:06'
            ],
            [
                39, 38, 'Le norme di prevenzione incendi sono adottate con:', 'Decreto del Presidente della Repubblica', 'Decreto della Presidenza del Consiglio dei Ministri', 'Decreto del Ministro dell\'Interno', 'c', '2024-08-27 05:23:56', '2024-08-27 05:23:56'
            ],
            [
                40, 39, 'Gli agenti estinguenti primari sono:', 'sabbia -halon', 'polvere-C02', 'acqua-schiuma', 'c', '2024-08-27 05:24:15', '2024-08-27 05:24:15'
            ],
            [
                41, 40, 'Inertizzare un ambiente significa:', 'ridurre la probabilità di incendio, in presenza di sostanze altamente infiammabili o esplosive, per saturazione dei locali con gas inerti', 'immettere un gas inerte fino a ridurre la percentuale di ossigeno presente nell\'aria', 'rimuovere ogni presenza di sostanza infiammabile  o tossica', 'a', '2024-08-27 05:24:44', '2024-08-27 05:24:44'
            ],
            [
                42, 41, 'Le merci pericolose possono essere trasportate con gli aerei:', 'mai', 'nel rispetto delle misure di sicurezza previste', 'solo se nell\'aeroporto c\'è l\'apposito servizio antincendio', 'b', '2024-08-27 05:25:06', '2024-08-27 05:25:06'
            ],
            [
                43, 42, 'La normativa  I.C.A.O. suddivide gli agenti estinguenti in:', 'principali e complementari', 'principali e secondari', 'prima e seconda scelta', 'a', '2024-08-27 05:25:31', '2024-08-27 05:25:31'
            ],
            [
                44, 43, 'L’estinguente principale è:', 'la polvere tipo a,b,c,', 'l’acqua per la produzione della schiuma', 'il liquido schiumogeno a media espansione', 'b', '2024-08-27 05:25:54', '2024-08-27 05:25:54'
            ],
            [
                45, 44, 'Rispetto al rendimento, l’ I.C.A.O. suddivide la schiuma in:', 'livello A e B', 'livello A, B e C', 'livello C e D', 'a', '2024-08-27 05:26:17', '2024-08-27 05:26:17'
            ],
            [
                46, 45, 'I tipi di liquido schiumogeno utilizzati negli eliporti/elisuperfici sono:', 'proteinici o semiproteinici e comunque di livello A', 'per alcooli di livello C', 'fluoro-proteinici o A.F.F.F. e comunque di livello B', 'c', '2024-08-27 05:26:55', '2024-08-27 05:26:55'
            ],
            [
                47, 46, 'I liquidi schiumogeni fluoroproteinici o A.F.F.F. sono:', 'a  bassa espansione', 'a  media espansione', 'ad  alta espansione', 'a', '2024-08-27 05:27:18', '2024-08-27 05:27:18'
            ],
            [
                48, 47, 'Il rapporto tra il volume finale della schiuma, dopo l’erogazione, ed il volume iniziale della soluzione, prima dell’erogazione, è denominato:', 'rapporto di concentrazione', 'rapporto di espansione', 'rapporto di rendimento', 'b', '2024-08-27 05:27:53', '2024-08-27 05:27:53'
            ],
            [
                49, 48, 'Per aumentare la gittata di una schiuma bisogna usare un liquido schiumogeno:', 'a  basso rapporto di espansione', 'a  medio rapporto di espansione', 'ad  alto rapporto di espansione', 'a', '2024-08-27 05:29:10', '2024-08-27 05:29:10'
            ],
            [
                50, 49, 'La portata specifica di una schiuma è:', 'il rapporto tra il volume della schiuma prodotta e quello del liquido usato', 'il rapporto del volume in litri della schiuma prodotta nell’unità di tempo e la superficie in m2 dell’incendio', 'il rapporto tra il volume del liquido schiumogeno e il totale della miscela', 'b', '2024-08-27 05:29:29', '2024-08-27 05:29:29'
            ],
            [
                51, 50, 'Un idrante fa parte delle misure di:', 'protezione attiva', 'protezione passiva', 'prevenzione', 'a', '2024-08-27 05:29:48', '2024-08-27 05:29:48'
            ],
        ],
        [
            'Modulo 1'
        ],
    ],

    multiple_general_b2s: [
        [
            'module_2'
        ],
        [
            [
                1, 1, 'Il responsabile della Direzione Aeroportuale è un dipendente:',
                'A.N.S.V.', 'E.N.A.C.', 'E.N.A.V.', 'b', '2024-08-27 13:27:17', '2024-08-27 13:27:17'
            ],
            [
                2, 2, 'L\'E.N.A.V. è:',
                'Ente Nazionale Aviazione Civile', 'Ente Nazionale Assistenza al Volo', 'Ente Nazionale Aeromobili in Volo', 'b', '2024-08-27 13:32:09', '2024-08-27 13:32:09'
            ],
            [
                3, 3, 'Per l\'I.C.A.O. 1 kg di polvere chimica secca equivale a:',
                '1 lt di acqua per la produzione di schiuma proteinica (livello A)', '1 lt di acqua per la produzione di schiuma AFFF (livello B)', '0,66 lt di acqua per la produzione di schiuma proteinica (livello A)', 'a', '2024-08-27 13:32:34', '2024-08-27 13:32:34'
            ],
            [
                4, 4, 'Un elicottero che determina la categoria H3 di un\'elisuperficie può atterrare su una aerosuperficie di:',
                'Ia categoria', 'IIa categoria', 'IIIa/IVa categoria', 'c', '2024-08-27 13:33:11', '2024-08-27 13:33:11'
            ],
            [
                5, 5, 'La torre di controllo:',
                'organizza lo svolgimento delle attività aeroportuali', 'regola il traffico d\'aeroporto mediante comunicazioni radio', 'gestisce il trasporto aereo', 'b', '2024-08-27 13:33:37', '2024-08-27 13:33:37'
            ],
            [
                6, 6, 'Gli agenti estinguenti complementari ammessi dall\'I.C.A.O. sono:',
                'polveri chimiche secche', 'anidride carbonica', 'schiume proteiniche', 'a', '2024-08-27 13:34:09', '2024-08-27 13:34:09'
            ],
            [
                7, 7, 'Gli standard I.C.A.O. sono:',
                'disposizioni vincolanti', 'disposizioni raccomandate', 'linee guida', 'a', '2024-08-27 13:34:59', '2024-08-27 13:34:59'
            ],
            [
                8, 8, 'Quanti tipi di etichettature sono utilizzabili nelle spedizioni aeree?',
                'due distinte, indicanti pericolosità e movimentazione', 'due, su un unico modulo indicante pericolosità e movimentazione', 'una, indicante pericolosità e peso', 'a', '2024-08-27 13:35:34', '2024-08-27 13:35:34'
            ],
            [
                9, 9, 'La torre di controllo TWR:',
                'fornisce assistenza al decollo ed all\'atterraggio', 'dispone la chiusura dell\'aeroporto', 'gestisce i varchi doganali', 'a', '2024-08-27 13:35:58', '2024-08-27 13:35:58'
            ],
            [
                10, 10, 'Lo "stato di emergenza" in aeroporto è dichiarato:',
                'dall\' ENAC', 'dalla TWR', 'dalla Guardia di Finanza', 'b', '2024-08-27 13:36:26', '2024-08-27 13:36:26'
            ],
            [
                11, 11, 'La regolamentazione tecnica per l\'istituzione del servizio di soccorso e lotta antincendi è emanata da:',
                'E.N.A.C.', 'Gestore aeroportuale', 'Dipartimento dei Vigili del Fuoco, del Soccorso Pubblico e della Difesa Civile', 'c', '2024-08-27 13:37:05', '2024-08-27 13:37:05'
            ],
            [
                12, 12, 'Per "movimento aereo" si intende:',
                'l\'insieme di atterraggio e decollo', 'indifferentemente un atterraggio o un decollo', 'solo l\'atterraggio', 'b', '2024-08-27 13:37:29', '2024-08-27 13:37:29'
            ],
            [
                13, 13, 'Le elisuperfici situate su navi:',
                'sono soggette ad autorizzazione dei VV.F.', 'non sono soggette ad autorizzazione da parte dei VV.F.', 'sono soggette ad autorizzazione preventiva della Capitaneria di Porto', 'b', '2024-08-27 13:37:56', '2024-08-27 13:37:56'
            ],
            [
                14, 14, 'Un distributore di carburante all’interno di un aeroporto, per poter funzionare, deve essere autorizzato da:',
                'Comandante Provinciale VV.F.', 'Comandante Provinciale di Polizia', 'Direttore dell’Aeroporto', 'a', '2024-08-27 13:38:23', '2024-08-27 13:38:23'
            ],
            [
                15, 15, 'La sigla E.N.A.C. indica',
                'Ente Nazionale Attività e Controllo', 'Ente Nazionale Aviazione Civile', 'Ente Nazionale Addetti al Controllo Aereo', 'b', '2024-08-27 13:38:59', '2024-08-27 13:38:59'
            ],
            [
                16, 16, 'La riserva di liquido schiumogeno e di estinguenti complementari in un aeroporto è di ... della quantità previste dalle norme e in carico agli automezzi antincendio',
                '400%', '200%', '100%', 'b', '2024-08-27 13:39:58', '2024-08-27 13:39:58'
            ],
            [
                17, 17, 'La categoria I.C.A.O. di un aeroporto dipende:',
                'le dimensioni dei velivoli che atterranno', 'la frequenza dei decolli e degli atterraggi', 'di entrambi i fattori a) e b)', 'c', '2024-08-27 13:40:25', '2024-08-27 13:40:25'
            ],
            [
                18, 18, 'Il tempo di risposta è:',
                'il tempo di arrivo di tutti gli automezzi di soccorso nei pressi dell’aereo incidentato', 'il tempo di accelerazione da fermo del primo veicolo antincendio', 'il tempo che intercorre tra la chiamata di allarme al servizio antincendio ed il momento in cui il primo/i veicolo/i antincendio raggiunge il luogo dell’incidente ed inizia ad erogare il 50% del rateo di scarico previsto per la categoria dell’aeroporto', 'c', '2024-08-27 13:40:53', '2024-08-27 13:40:53'
            ],
            [
                19, 19, 'Sugli aerei per trasporto merci i piloti possono fumare:',
                'durante le soste in aeroporto', 'durante il rifornimento', 'mai', 'c', '2024-08-27 13:41:48', '2024-08-27 13:41:48'
            ],
            [
                20, 20, 'Tra i 18 Annessi alla Convenzione di Chicago, quello che tratta le norme di soccorso e lotta antincendio è:',
                'L’Annesso 12: Ricerca e salvataggio', 'L’Annesso 14: Aerodromi', 'L’Annesso 17: Sicurezza', 'b', '2024-08-27 13:42:14', '2024-08-27 13:42:14'
            ],
            [
                21, 21, 'Il rateo di scarico richiesto dall’I.C.A.O. è la portata di agente estinguente che deve essere erogata in un minuto da:',
                'un solo veicolo', 'uno o più veicoli', 'solo due veicoli', 'b', '2024-08-27 13:42:39', '2024-08-27 13:42:39'
            ],
            [
                22, 22, '1 kg di polvere equivale a:',
                '1,2 lt di acqua per la produzione di schiuma di livello A', '0,66 lt di acqua per la produzione di schiuma di livello A', '0,66 lt di acqua per la produzione di schiuma di livello B', 'c', '2024-08-27 13:43:12', '2024-08-27 13:43:12'
            ],
            [
                23, 23, 'Negli eliporti/elisuperfici, ai fini del soccorso e lotta antincendio, esistono:',
                'un\'unica categoria antincendio (categoria H)', 'dieci categorie, dalla Ia alla Xa', 'tre categorie: H1 - H2 - H3', 'c', '2024-08-27 13:43:38', '2024-08-27 13:43:38'
            ],
            [
                24, 24, 'La categoria antincendio di eliporti/elisuperfici è determinata:',
                'dal numero di pale del rotore principale dell’elicottero', 'dalla lunghezza fuori tutto dell\'elicottero più lungo che normalmente utilizza l’eliporto', 'dalla capacità del serbatoio di carburante dell’elicottero che normalmente utilizza l’eliporto', 'b', '2024-08-27 13:44:03', '2024-08-27 13:44:03'
            ],
            [
                25, 25, 'Un eliporto di categoria antincendio H1 può essere utilizzato da:',
                'elicotteri aventi lunghezza fuoritutto da 0 m fino a 15 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 15 m fino a 24 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 24 m fino a 35 m esclusi', 'a', '2024-08-27 13:44:34', '2024-08-27 13:44:34'
            ],
            [
                26, 26, 'Un eliporto di categoria antincendio H2 può essere utilizzato da:',
                'elicotteri aventi lunghezza fuoritutto da 0 m fino a 15 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 15 m fino a 24 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 24 m fino a 35 m esclusi', 'b', '2024-08-27 13:45:20', '2024-08-27 13:45:20'
            ],
            [
                27, 27, 'Un eliporto di categoria antincendio H3 può essere utilizzato da:',
                'elicotteri aventi lunghezza fuoritutto da 0 m fino a 15 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 15 m fino a 24 m esclusi', 'elicotteri aventi lunghezza fuoritutto da 24 m fino a 35 m esclusi', 'c', '2024-08-27 13:45:42', '2024-08-27 13:45:42'
            ],
            [
                28, 28, 'Durante i periodi di attività con elicotteri più piccoli rispetto alla categoria dell\'eliporto, il livello di protezione è:',
                'non inferiore a quello necessario per la categoria dell’elicottero più grande che si prevede utilizzi l’eliporto durante tale periodo', 'inferiore a quello necessario per la categoria dell’elicottero più grande che si prevede utilizzi l’eliporto durante tale periodo', 'adattato all’elicottero più piccolo che in quel periodo utilizza l’eliporto', 'a', '2024-08-27 13:46:13', '2024-08-27 13:46:13'
            ],
            [
                29, 29, 'Un elicottero di lunghezza fuori tutto m 17,1 (tipo AB 412), non può utilizzare eliporti di categoria antincendio:',
                'H1', 'H2', 'H3', 'a', '2024-08-27 13:46:51', '2024-08-27 13:46:51'
            ],
            [
                30, 30, 'Un elicottero di lunghezza fuori tutto m 16,69 (tipo Sikorsky SH-3D), non può utilizzare eliporti di categoria antincendio:',
                'H1', 'H2', 'H3', 'c', '2024-08-27 13:47:09', '2024-08-27 13:47:09'
            ],
            [
                31, 31, 'Un elicottero di lunghezza fuori tutto m 22,81 (tipo Agusta Westland EH-101), non può utilizzare eliporti di categoria antincendio:',
                'H1', 'H2', 'H3', 'c', '2024-08-27 13:47:30', '2024-08-27 13:47:30'
            ],
            [
                32, 32, 'La categoria antincendio di un eliporto può essere variata a seguito di cambiamento della tipologia di elicotteri che lo utilizzano?',
                'Si, il Gestore deve redigere uno specifico documento valutativo dal quale si evincano le nuove esigenze, presentandolo ad ENAC per le determinazioni in merito', 'No, la categoria dell’eliporto rimane sempre la stessa', 'solo nel caso in cui il Gestore avvisi con lettera raccomandata il Comando dei Vigili del Fuoco competente per territorio', 'a', '2024-08-27 13:48:10', '2024-08-27 13:48:10'
            ],
            [
                33, 33, 'Per gli eliporti non situati all\'interno di aeroporti, provvede al soccorso antincendio:',
                'il Gestore', 'l\'E.N.A.C.', 'i Vigili del Fuoco', 'a', '2024-08-27 13:48:38', '2024-08-27 13:48:38'
            ],
            [
                34, 34, 'L’agente estinguente complementare può sostituire il principale in eliporti/elisuperfici al livello del suolo?',
                'Si, in tutto o in parte, purché sia adottata l’equivalenza 1kg di agente chimico in polvere ogni 0,66 lt di acqua per la produzione di schiuma filmante; è prescritto l’automezzo antincendio', 'è possibile sostituire fino al 50%, adottando l’equivalenza 1kg di agente chimico in polvere ogni litro d\'acqua per la produzione di schiuma filmante o fluoro proteinica', 'No, le normative internazionali I.C.A.O. non lo prevedono', 'a', '2024-08-27 13:49:07', '2024-08-27 13:49:07'
            ],
            [
                35, 35, 'La validità della certificazione dell\'eliporto è:',
                '2 anni dalla data di rilascio  o del rinnovo', '3 anni dalla data di rilascio o del rinnovo', '5 anni dalla data del rilascio o del rinnovo', 'b', '2024-08-27 13:49:38', '2024-08-27 13:49:38'
            ],
            [
                36, 36, 'L’agente estinguente complementare può sostituire il principale in eliporti/elisuperfici in elevazione ?',
                'Si, purché sia adottata l’equivalenza 1kg di agente chimico in polvere ogni 0,66 litri di acqua per la produzione di schiuma filmante', 'No, eccetto i casi  di clima in cui l’acqua può congelare', 'No, mai', 'b', '2024-08-27 13:50:13', '2024-08-27 13:50:13'
            ],
            [
                37, 37, 'In caso di eliporto all’interno di un aeroporto, il tempo di risposta del servizio di soccorso antincendio deve essere:',
                'non superiore a due minuti', 'non superiore ai quattro minuti', 'non superiore ai sei minuti', 'a', '2024-08-27 13:50:41', '2024-08-27 13:50:41'
            ],
            [
                38, 38, 'L’equipaggiamento da utilizzarsi negli eliporti, commisurato al livello di protezione, è stabilito da:',
                'il Gestore', 'l\'E.N.A.C.', 'il C.N.VV.F.', 'c', '2024-08-27 13:51:29', '2024-08-27 13:51:29'
            ],
            [
                39, 39, 'La quantità minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H1 al livello del suolo, è:',
                'lt  300', 'lt  500', 'lt  800', 'b', '2024-08-28 08:04:53', '2024-08-28 08:04:53'
            ],
            [
                40, 40, 'La quantità minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H2 al livello del suolo, è:',
                'lt  800', 'lt  1.000', 'lt  1.200', 'b', '2024-08-28 08:05:17', '2024-08-28 08:05:17'
            ],
            [
                41, 41, 'La quantità  minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H3 al livello del suolo, è:',
                'lt  1.400', 'lt  1.600', 'lt  1.800', 'b', '2024-08-28 08:05:42', '2024-08-28 08:05:42'
            ],
            [
                42, 42, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H1 al livello del suolo, è:',
                'lt/min.  150', 'lt/min.  250', 'lt/min.  350', 'b', '2024-08-28 08:06:18', '2024-08-28 08:06:18'
            ],
            [
                43, 43, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H2 al livello del suolo, è:',
                'lt/min.  400', 'lt/min.  500', 'lt/min.  600', 'b', '2024-08-28 08:06:52', '2024-08-28 08:06:52'
            ],
            [
                44, 44, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H3 al livello del suolo, è:',
                'lt/min.  700', 'lt/min.  800', 'lt/min.  900', 'b', '2024-08-28 08:09:45', '2024-08-28 08:09:45'
            ],
            [
                45, 45, 'La quantità minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H1 al livello del suolo, è:',
                'kg.  15', 'kg.  25', 'kg.  35', 'b', '2024-08-28 08:11:32', '2024-08-28 08:11:32'
            ],
            [
                46, 46, 'La quantità minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H2 al livello del suolo, è:',
                'kg.  40', 'kg.   50', 'kg.   60', 'b', '2024-08-28 08:12:16', '2024-08-28 08:12:16'
            ],
            [
                47, 47, 'La quantità minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H3 al livello del suolo, è:',
                'kg .  90', 'kg.   100', 'kg.   110', 'b', '2024-08-31 05:01:15', '2024-08-31 05:01:15'
            ],
            [
                48, 48, 'La portata minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H1 al livello del suolo, è:',
                'kg/min.   40', 'kg/min    50', 'kg/min.   60', 'b', '2024-08-31 05:02:03', '2024-08-31 05:02:03'
            ],
            [
                49, 49, 'La portata minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H2 al livello del suolo, è:',
                'kg/min.   40', 'kg/min    50', 'kg/min.   60', 'b', '2024-08-31 05:03:19', '2024-08-31 05:03:19'
            ],
            [
                50, 50, 'La portata minima di polveri chimiche secche, per un eliporto/elisuperficie di categoria H3 al livello del suolo, è:',
                'kg/min.   40', 'kg/min.   50', 'kg/min.   60', 'b', '2024-08-31 05:03:47', '2024-08-31 05:03:47'
            ],
            [
                51, 51, 'La quantità minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H1 sopraelevato, è:',
                'lt  2.300', 'lt  2.500', 'lt 2.700', 'b', '2024-08-31 05:04:13', '2024-08-31 05:04:13'
            ],
            [
                52, 52, 'La quantità minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H2 sopraelevato, è:',
                'lt  4.800', 'lt  5.000', 'lt 5.200', 'b', '2024-08-31 05:04:34', '2024-08-31 05:04:34'
            ],
            [
                53, 53, 'La quantità minima di acqua per la produzione di schiuma, per un eliporto/elisuperficie di categoria H3 sopraelevato, è:',
                'lt  7.800', 'lt  8.000', 'lt 8.200', 'b', '2024-08-31 05:04:55', '2024-08-31 05:04:55'
            ],
            [
                54, 54, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H1 sopraelevato, è:',
                'lt/min  150', 'lt/min  250', 'lt/min  350', 'b', '2024-08-31 05:05:18', '2024-08-31 05:05:18'
            ],
            [
                55, 55, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H2 sopraelevato, è:',
                'lt/min  400', 'lt/min  500', 'lt/min  600', 'b', '2024-08-31 05:06:23', '2024-08-31 05:06:23'
            ],
            [
                56, 56, 'La portata minima di soluzione schiumogena, per un eliporto/elisuperficie di categoria H3 sopraelevato, è:',
                'lt/min  700', 'lt/min  800', 'lt/min  900', 'b', '2024-08-31 05:06:47', '2024-08-31 05:06:47'
            ],
            [
                57, 57, 'In caso di emorragia arteriosa, qualora sia indispensabile utilizzare il laccio emostatico, esso va posizionato:',
                'all\'altezza dell\'omero o del femore', 'subito a monte della ferita', 'subito a valle della ferita', 'b', '2024-08-31 09:49:43', '2024-08-31 09:49:43'
            ],
            [
                58, 58, 'Per un corretto trattamento delle ferite è necessario:',
                'ripulire con acqua corrente o soluzione fisiologica', 'disinfettare e applicare una medicazione', 'sia A che B', 'c', '2024-08-31 09:50:01', '2024-08-31 09:50:01'
            ],
            [
                59, 59, 'In caso di grave emorragia, il trattamento é:',
                'diverso a seconda che l\'emorragia sia arteriosa o venosa', 'quello previsto, indipendentemente dall\'origine arteriosa o venosa', 'lasciato alla discrezione dell\'operatore', 'b', '2024-08-31 09:50:25', '2024-08-31 09:50:25'
            ],
            [
                60, 60, 'Il primo trattamento di un\' ustione è:',
                'raffreddare con acqua o soluzione fisiologica e coprire con teli sterili', 'applicare pomata lenitiva', 'bucare e spremere le bolle', 'a', '2024-08-31 09:54:46', '2024-08-31 09:54:46'
            ],
            [
                61, 61, 'La classificazione delle ustioni in gradi (1°, 2° e 3°) riguarda:',
                'la temperatura che ha causato l\'ustione stessa', 'la parte corporea interessata', 'la profondità delle ustioni', 'c', '2024-08-31 09:55:05', '2024-08-31 09:55:05'
            ],
            [
                62, 62, 'In caso di ustione, i vestiti adesi vanno:',
                'rimossi manualmente per evitare infezioni', 'lasciati attaccati alla cute, raffreddati e coperti con teli sterili o almeno puliti', 'rimossi utilizzando le apposite pinze', 'b', '2024-08-31 09:55:32', '2024-08-31 09:55:32'
            ],
            [
                63, 63, 'In caso di ustione elettrica, il soccorritore deve:',
                'iniziare immediatamente il BLSD', 'praticare immediatamente solo BLS, senza usare il DAE', 'allontanare la vittima dalla fonte elettrica e valutare le funzioni vitali', 'c', '2024-08-31 09:56:02', '2024-08-31 09:56:02'
            ],
            [
                64, 64, 'In caso di ustione chimica ai bulbi oculari, è necessario:',
                'lavare la parte con soluzione fisiologica o prodotti specifici', 'non agire assolutamente sulla parte lesa e trasportare la vittima immediatamente in ospedale', 'chiudere entrambi gli occhi con garze asciutte', 'a', '2024-08-31 09:56:20', '2024-08-31 09:56:20'
            ],
            [
                65, 65, 'In caso di ustione chimica, le prime cose da fare sono:',
                'allontanare la vittima dall\'agente ustionate e lavare con acqua abbondantemente, fino alla totale rimozione dell\'agente ustionante', 'non agire mai sulla parte lesa e trasportare la vittima immediatamente in ospedale', 'fasciare stretto per impedire l\'allargamento dell\'ustione', 'a', '2024-08-31 09:56:36', '2024-08-31 09:56:36'
            ],
        ],
        [
            'Modulo 2'
        ],
    ],

    multiple_helihems_b3s: [
        [
            'module_3'
        ],
        [
            [
                1, 1, 'Un\'aerovia è:',
                'la superstrada che porta all\'aeroporto', 'uno spazio aereo', 'la via di rullaggio per gli aerei sull\'area di movimento', 'b', '2024-08-31 06:31:47', '2024-08-31 06:31:47'
            ],
            [
                2, 2, 'La TDZ (Touch Down Zone) è:',
                'il terminal della zona aeroportuale', 'la zona di toccata della pista', 'il punto in cui l\'aeromobile si deve fermare prima di entrare nella zona di parcheggio', 'b', '2024-08-31 06:32:28', '2024-08-31 06:32:28'
            ],
            [
                3, 3, 'Se la pista di volo è orientata a 28° nord, le testate sono denominate:',
                '03 -21', '01 - 28', '02 - 08', 'a', '2024-08-31 06:46:37', '2024-08-31 06:46:37'
            ],
            [
                4, 4, 'Confrontando le zone controllate dalla TWR e dall\'APP risulta che:',
                'la zona dell\'APP è interna a quella della TWR', 'la zona della TWR è uguale a quella dell\'APP', 'la zona della TWR è compresa in quella dell\'APP', 'c', '2024-08-31 06:46:54', '2024-08-31 06:46:54'
            ],
            [
                5, 5, 'Se una testata pista è denominata 35, l\'altra sarà:',
                '17', '53', '04', 'a', '2024-08-31 06:47:16', '2024-08-31 06:47:16'
            ],
            [
                6, 6, 'Gli automezzi di soccorso VF in ambito aeroportuale sono collegati via radio:',
                'solo con la sede di servizio VF', 'solo con la Torre di controllo', 'solo con la Torre di controllo', 'c', '2024-08-31 06:47:35', '2024-08-31 06:47:35'
            ],
            [
                7, 7, 'Secondo l\'alfabeto internazionale ICAO la lettera T si legge:',
                'Taxi', 'Toronto', 'Tango', 'c', '2024-08-31 06:52:19', '2024-08-31 06:52:19'
            ],
            [
                8, 8, 'Se una testata pista è denominata 37, l\'altra sarà:',
                '55', 'non esiste', '01', 'b', '2024-08-31 06:53:44', '2024-08-31 06:53:44'
            ],
            [
                9, 9, 'Il numero di testata 05 indica che la pista è orientata:',
                '5° rispetto al Nord', '50° rispetto al Nord', '10° rispetto al Nord', 'b', '2024-08-31 06:54:50', '2024-08-31 06:54:50'
            ],
            [
                10, 10, 'Con la sigla FOD si intende:',
                'un aeroporto internazionale', 'oggetti presenti sull\'area di movimento che possono provocare danni agli aeromobili', 'l\'indicazione dei punti di ristoro', 'b', '2024-08-31 06:55:50', '2024-08-31 06:55:50'
            ],
            [
                11, 11, 'Gli hangar sono:',
                'rimesse per aeroplani', 'rimesse per i mezzi antincendio aeroportuali', 'impianti per il rifornimento degli aerei', 'a', '2024-08-31 06:58:54', '2024-08-31 06:58:54'
            ],
            [
                12, 12, '360 ° indica:',
                'il nord', 'il sud', 'l’oriente', 'a', '2024-08-31 06:59:37', '2024-08-31 06:59:37'
            ],
            [
                13, 13, 'Secondo l\'alfabeto internazionale ICAO la lettera G si legge:',
                'golf', 'golb', 'got', 'a', '2024-08-31 07:01:28', '2024-08-31 07:01:28'
            ],
            [
                14, 14, 'L\'elevazione dell\'aeroporto è:',
                'l\'elevazione del punto più alto dell\'area di atterraggio', 'l\'elevazione dell\'aeroporto rispetto al livello del mare', 'l\'altezza della torre di controllo', 'a', '2024-08-31 07:01:45', '2024-08-31 07:01:45'
            ],
            [
                15, 15, 'Si definisce eliporto:',
                'un\'area idonea alla partenza ed all\'approdo di aeromobili', 'un\'area idonea alla partenza ed all\'approdo di elicotteri', 'un\'area idonea alla partenza ed all\'approdo di navi', 'b', '2024-08-31 07:02:38', '2024-08-31 07:02:38'
            ],
            [
                16, 16, 'Si definisce aviosuperficie:',
                'un\'area idonea alla partenza ed all\'approdo di aeromobili, diversa dall\'aeroporto', 'un\'area idonea alla partenza ed all\'approdo di elicotteri', 'un\'area non idonea alla partenza ed all\'approdo di aeromobili', 'a', '2024-08-31 07:03:07', '2024-08-31 07:03:07'
            ],
            [
                17, 17, 'Si definisce elisuperfice:',
                'un\'aviosuperfice destinata all\'uso esclusivo degli elicotteri, che non sia un eliporto', 'un\'aviosuperfice destinata all\'uso esclusivo degli aeromobili', 'un eliporto', 'a', '2024-08-31 07:04:51', '2024-08-31 07:04:51'
            ],
            [
                18, 18, 'Si definisce elisuperficie in elevazione:',
                'un\'aviosuperfice ad uso esclusivo degli aeromobili', 'un\'elisuperficie posta su struttura avente elevazione di 2 mt o più', 'un\'elisuperficie posta su struttura avente elevazione di 3 mt o più', 'c', '2024-08-31 07:05:13', '2024-08-31 07:05:13'
            ],
            [
                19, 19, 'Ai fini antincendio si definisce eliporto un\'area:',
                'idonea alla partenza ed all’approdo di elicotteri, conforme alle prescrizioni di cui all’Annesso XIV ICAO.', 'idonea alla partenza ed all’approdo di elicotteri', 'idonea all’approdo di elicotteri diversa dall’aeroporto', 'a', '2024-08-31 07:05:32', '2024-08-31 07:05:32'
            ],
            [
                20, 20, 'Per  aviosuperficie si intende un\'area:',
                'idonea alla partenza ed all’approdo di elicotteri, diversa dall’aeroporto', 'idonea alla partenza ed all’approdo di aeromobili, diversa dall’aeroporto, non appartenente al demanio aeronautico', 'idonea alla partenza di aviatori', 'b', '2024-08-31 07:06:31', '2024-08-31 07:06:31'
            ],
            [
                21, 21, 'Si definisce elisuperficie:',
                'un’aviosuperficie destinata all\'uso esclusivo degli elicotteri, che non sia un eliporto', 'una superficie ad uso esclusivo degli aerei ultra leggeri', 'una superficie destinata al ricovero degli elicotteri, per manutenzione', 'a', '2024-08-31 07:06:50', '2024-08-31 07:06:50'
            ],
            [
                22, 22, 'Si definisce elisuperficie in elevazione:',
                'una superficie elevabile fino ad un massimo di 3 mt dal terreno', 'un\'elisuperficie posta su una nave da crociera', 'un\'elisuperficie posta su struttura avente elevazione di 3 mt o più rispetto al livello del terreno o del mare (se trattasi di piattaforma fissa in acqua)', 'c', '2024-08-31 07:07:18', '2024-08-31 07:07:18'
            ],
            [
                23, 23, 'Un eliporto in ambito aeroportuale:',
                'è situato  nelle immediate vicinanze di un aeroporto', 'è  situato all’interno di un aeroporto', 'è  situato all’esterno di un aeroporto', 'b', '2024-08-31 07:07:38', '2024-08-31 07:07:38'
            ],
            [
                24, 24, 'Per “PISTA DI RULLAGGIO IN VOLO” si intende:',
                'un sentiero determinato in superficie destinato al rullaggio in volo degli elicotteri', 'un sentiero determinato in superficie destinato allo spostamento in volo degli elicotteri', 'un sentiero determinato in superficie destinato allo spostamento a terra degli elicotteri', 'a', '2024-08-31 07:07:57', '2024-08-31 07:07:57'
            ],
            [
                25, 25, 'Per “CLEARWAY” si intende:',
                'un\'area circolare delimitata da striscia continua di colore giallo', 'un\'area libera da ostacoli', 'un\'area destinata al rifornimento di carburante', 'a', '2024-08-31 07:08:17', '2024-08-31 07:08:17'
            ],
            [
                26, 26, 'Una piazzola per elicotteri è:',
                'una zona destinata alla manutenzione degli elicotteri', 'una zona destinata al solo parcheggio degli elicotteri', 'una zona adatta al parcheggio, manovre di rullaggio, atterraggio e sollevamento degli elicotteri', 'c', '2024-08-31 07:08:33', '2024-08-31 07:08:33'
            ],
            [
                27, 27, 'Per area di sicurezza si intende:',
                'un\'area libera da ostacoli che circonda la FATO', 'un\'area  inibita alla sosta degli elicotteri', 'una zona di riunione in caso di emergenza', 'a', '2024-08-31 07:08:50', '2024-08-31 07:08:50'
            ],
            [
                28, 28, 'Per “ HELIDECK” si intende:',
                'il quaderno di bordo dell’elicottero', 'il ponte di volo per elicotteri', 'la zona dell’eliporto destinata agli impianti antincendio', 'b', '2024-08-31 07:09:07', '2024-08-31 07:09:07'
            ],
            [
                29, 29, 'Per eliporto a livello del suolo si intende:',
                'un eliporto situato sul terreno o sulla superficie dell’acqua', 'un eliporto situato su una struttura sopraelevata', 'un eliporto situato su una nave', 'a', '2024-08-31 07:09:24', '2024-08-31 07:09:24'
            ],
            [
                30, 30, 'Per FATO si intende:',
                'un\'area di avvicinamento finale e decollo', 'un sentiero di decollo', 'una distanza disponibile per l’atterraggio', 'a', '2024-08-31 07:09:41', '2024-08-31 07:09:41'
            ],
            [
                31, 31, 'Per RTDOAH si intende:',
                'un\'area di atterraggio e sollevamento', 'una distanza disponibile per il decollo', 'una distanza disponibile per il decollo abortito', 'c', '2024-08-31 07:10:02', '2024-08-31 07:10:02'
            ],
            [
                32, 32, 'Per IMC si intende:',
                'condizioni meteorologiche di volo strumentale', 'condizioni meteorologiche di volo a vista', 'distanza disponibile per il decollo', 'a', '2024-08-31 07:10:19', '2024-08-31 07:10:19'
            ],
            [
                33, 33, 'Per “VMC” si intende:',
                'distanza disponibile per il decollo abortito', 'distanza disponibile per il decollo', 'condizioni meteorologiche di  volo a vista', 'c', '2024-08-31 07:10:39', '2024-08-31 07:10:39'
            ],
            [
                34, 34, 'Il collegamento radio tra Torre di controllo e sede VV.F. è:',
                'obbligatorio', 'facoltativo', 'indifferente', 'a', '2024-08-31 07:11:01', '2024-08-31 07:11:01'
            ],
            [
                35, 35, 'In aeroporto la dichiarazione dello stato di emergenza spetta:',
                'al controllo del traffico', 'alla torre di controllo', 'a chiunque si accorge del verificarsi di un incidente', 'b', '2024-08-31 07:11:19', '2024-08-31 07:11:19'
            ],
            [
                36, 36, 'Nello stato di allarme, previsto dal P.E.A., i soccorritori antincendio aeroportuali devono:',
                'indossare i D.P.I., salire a bordo del mezzo di soccorso, uscire nel piazzale antistante la rimessa e stare in ascolto radio su frequenza T.W.R.', 'stare all\'interno delle rimesse con i D.P.I. indossati, pronti a salire a bordo dei mezzi', 'indossare i D.P.I., salire a bordo del mezzo di soccorso, posizionarsi sui raccordi e stare in ascolto radio su frequenza T.W.R.', 'a', '2024-08-31 07:11:36', '2024-08-31 07:11:36'
            ],
            [
                37, 37, 'In caso d\'incidente di un aeromobile, all\'interno del sedime aeroportuale, i soccorritori antincendio aeroportuali devono:',
                'rispettare i tempi di risposta pevisti dal P.E.A.', 'arrivare sul luogo dell\'incidente previa autorizzazione dell\' E.N.A.C.', 'arrivare sul luogo dell\'incidente previa autorizzazione del Gestore', 'a', '2024-08-31 07:11:54', '2024-08-31 07:11:54'
            ],
            [
                38, 38, 'L’assistenza antincendio e soccorso prevede:',
                'presenza di dotazioni antincendio e personale addetto, pronto ad intervenire in occasione di movimenti aerei', 'presenza di automezzi antincendio pronti ad intervenire', 'assistenza ai piloti dell’elicottero in occasione di decollo o approdo', 'a', '2024-08-31 07:12:19', '2024-08-31 07:12:19'
            ],
            [
                39, 39, 'Il tempo di risposta negli eliporti con impianto antincendio fisso è:',
                'nullo', 'due minuti', 'quattro minuti', 'a', '2024-08-31 07:12:41', '2024-08-31 07:12:41'
            ],
            [
                40, 40, 'In un eliporto situato all’interno di aeroporto lo stato di allarme viene comunicato da:',
                'TWR', 'Enac', 'agente di rampa', 'a', '2024-08-31 07:13:26', '2024-08-31 07:13:26'
            ]
        ],
        [
            'Modulo 3'
        ],
    ],

    multiple_helitechnique_b4s: [
        [
            'module_4',
        ],
        [
            [
                1, 1, 'Si definisce lunghezza fuoritutto:',
                'la massima lunghezza del rotore di un elicottero', 'la massima lunghezza fra i punti estremi dei pattini di un elicottero', 'la massima lunghezza fra i punti estremi dell’elicottero con i rotori in moto', 'c', '2024-08-31 07:15:04', '2024-08-31 07:15:04'
            ],
            [
                2, 2, 'In caso di incendio, la direzione del vento:',
                'è importante tenerne conto', 'non occorre tenerne conto', 'è ininfluente', 'a', '2024-08-31 07:15:49', '2024-08-31 07:15:49'
            ],
            [
                3, 3, 'In un incidente aereo la priorità dell’intervento riguarda:',
                'la salvezza dei passeggeri', 'la limitazione dei danni', 'il contenimento dell’incendio', 'a', '2024-08-31 07:16:19', '2024-08-31 07:16:19'
            ],
            [
                4, 4, 'In caso di eliporto situato all\'interno di un aeroporto è necessario:',
                'istituire un servizio di assistenza antincendio e di soccorso in aggiunta a quello aeroportuale', 'non istituire un servizio di assistenza antincendio e di soccorso in aggiunta a quello aeroportuale, purchè il livello di protezione sia adeguato all\'eliporto e il tempo di risposta non superi 2 minuti', 'in nessun caso occorre istituire un servizio antincendio e di soccorso oltre quello aeroportuale esistente', 'b', '2024-08-31 07:16:44', '2024-08-31 07:16:44'
            ],
            [
                5, 5, 'L’equipaggiamento d’emergenza della categoria antincendio H1/H2 prevede:',
                'nessuna accetta di soccorso', 'una accetta di soccorso', 'due accette di soccorso', 'b', '2024-08-31 07:17:03', '2024-08-31 07:17:03'
            ],
            [
                6, 6, 'L’equipaggiamento d’emergenza nella categoria antincendio H3 prevede:',
                'nessuna accetta di soccorso', 'una accetta di soccorso', 'due accette di soccorso', 'b', '2024-08-31 07:17:49', '2024-08-31 07:17:49'
            ],
            [
                7, 7, 'L’equipaggiamento d’emergenza nella categoria antincendio H1/H2 prevede:',
                'nessuna torcia elettrica', 'una torcia elettrica', 'due torce elettriche', 'c', '2024-08-31 07:18:07', '2024-08-31 07:18:07'
            ],
            [
                8, 8, 'L’equipaggiamento d’emergenza nella categoria antincendio H3 prevede:',
                'nessuna torcia elettrica', 'una torcia elettrica', 'due torce elettriche', 'c', '2024-08-31 07:18:31', '2024-08-31 07:18:31'
            ],
            [
                9, 9, 'L’equipaggiamento d’emergenza nella categoria antincendio H1/H2 prevede:',
                'una fune di sicurezza A 5 cm., lunga 15 metri', 'una fune di sicurezza A 5 cm., lunga 20 metri', 'nessuna fune di sicurezza', 'c', '2024-08-31 07:18:45', '2024-08-31 07:18:45'
            ],
            [
                10, 10, 'L’equipaggiamento d’emergenza nella categoria antincendio H3 prevede:',
                'una fune di sicurezza A 5 cm., lunga 15 metri', 'una fune di sicurezza A 5 cm., lunga 20 metri', 'nessuna fune di sicurezza', 'a', '2024-08-31 07:19:02', '2024-08-31 07:19:02'
            ],
            [
                11, 11, 'L’equipaggiamento d’emergenza nella categoria antincendio H1/H2 prevede:',
                'una tuta di avvicinamento completa', 'due tute di avvicinamento complete', 'quattro tute di avvicinamento complete', 'b', '2024-08-31 07:19:21', '2024-08-31 07:19:21'
            ],
            [
                12, 12, 'L’equipaggiamento d’emergenza nella categoria antincendio H3 prevede:',
                'una tuta di avvicinamento completa', 'due tute di avvicinamento complete', 'quattro tute di avvicinamento complete', 'c', '2024-08-31 07:19:38', '2024-08-31 07:19:38'
            ],
            [
                13, 13, 'L’equipaggiamento d’emergenza nella categoria antincendio H1/H2 prevede:',
                'un autorespiratore', 'due autorespiratori', 'quattro autorespiratori', 'b', '2024-08-31 07:19:57', '2024-08-31 07:19:57'
            ],
            [
                14, 14, 'L’equipaggiamento d’emergenza nella categoria antincendio H3 prevede:',
                'un autorespiratore', 'due autorespiratori', 'quattro autorespiratori', 'c', '2024-08-31 07:20:17', '2024-08-31 07:20:17'
            ],
            [
                15, 15, 'In caso di sversamento di carburante la procedura prevede che il personale allertato:',
                'non utilizzi acqua per lavare la superficie interessata', 'utilizzi l’acqua per diluire il combustibile', 'utilizzi liquido schiumogeno per evitare le emissioni di vapore del combustibile', 'a', '2024-08-31 07:20:37', '2024-08-31 07:20:37'
            ],
            [
                16, 16, 'Per “RD” si intende:',
                'la lunghezza totale dell’elicottero', 'il peso al decollo dell’elicottero', 'il diametro del rotore maggiore', 'c', '2024-08-31 07:21:01', '2024-08-31 07:21:01'
            ],
            [
                17, 17, 'Per “D” si intende:',
                'il diametro del rotore di coda', 'la massima dimensione dell’elicottero fuori tutto', 'il numero di pale del rotore maggiore', 'b', '2024-08-31 07:21:31', '2024-08-31 07:21:31'
            ],
            [
                18, 18, 'In un elicottero, il serbatoio del carburante generalmente è ubicato:',
                'sotto la fusoliera o nei pressi del motore', 'lungo la coda nei pressi del rotore', 'sotto il rotore principale', 'a', '2024-08-31 07:22:03', '2024-08-31 07:22:03'
            ],
            [
                19, 19, 'Negli eliporti/elisuperfici in elevazione, qualora si utilizzi l\'impianto di estinzione fisso, la gittata degli estinguenti principali deve essere continua per un tempo:',
                'non inferiore a 15 min', 'di almeno 10 min', 'di 5 min', 'a', '2024-08-31 07:22:18', '2024-08-31 07:22:18'
            ],
            [
                20, 20, 'Nell\'avvicinamento ad un elicottero con motore acceso è consigliabile intervenire:',
                'anteriormente', 'posteriormente', 'lateralmente', 'a', '2024-08-31 07:22:37', '2024-08-31 07:22:37'
            ],
        ],
        [
            'Modulo 4'
        ],
    ],

    multiple_firstaid_b5s: [
        [
            'module_5'
        ],
        [
            [
                1, 1, 'Prima di effettuare la respirazione artificiale è necessario che:',
                'le vie aeree siano libere', 'non ci siano ferite da taglio', 'sia disponibile ossigeno in bombole', 'a', '2024-08-31 07:24:02', '2024-08-31 07:24:02'
            ],
            [
                2, 2, 'La Rianimazione Cardio Polmonare si effettua con la persona in posizione:',
                'come la si trova, se si sospetta un trauma', 'supina', 'semi seduta', 'b', '2024-08-31 07:24:42', '2024-08-31 07:24:42'
            ],
            [
                3, 3, 'Una volta garantita la pervietà delle vie aeree nell\'adulto occorre valutare:',
                'lo stato di coscienza', 'la presenza di un respiro agonico', 'se è presente l\'attività respiratoria, palpare il polso carotideo e verificare se sono presenti segni di circolo', 'c', '2024-08-31 07:42:52', '2024-08-31 07:42:52'
            ],
            [
                4, 4, 'In una vittima adulta non cosciente, se le vie aeree sembrano ostruite dopo il primo tentativo di ventilazione, il soccorritore deve:',
                'riposizionare il capo e provare a ventilare', 'iniziare le compressioni toraciche', 'valutare la presenza di ostruzione da corpo estraneo', 'a', '2024-08-31 07:43:21', '2024-08-31 07:43:21'
            ],
            [
                5, 5, 'In quanto tempo un arresto respiratorio nell\'adulto non trattato porta ad arreso cardiorespiratorio:',
                '30 secondi', 'alcuni minuti', '10 minuti', 'b', '2024-08-31 07:43:42', '2024-08-31 07:43:42'
            ],
            [
                6, 6, 'La giusta sequenza delle fasi della \"catena della sopravvivenza\" nell\'adulto è:',
                'BLS precoce - riconoscimento e allarme precoce - defibrillazione precoce - soccorso avanzato precoce', 'defibrillazione precoce - riconoscimento e allarme precoce - BLS precoce - soccorso avanzato precoce', 'riconoscimento e allarme precoce - BLS precoce - defibrillazione precoce - soccorso avanzato precoce', 'c', '2024-08-31 07:44:01', '2024-08-31 07:44:01'
            ],
            [
                7, 7, 'Dopo aver raffreddato e coperto un\'ustione, il trattamento successivo è:',
                'difendere la vittima dall\'ipotermia e somministrare ossigeno', 'frizionare la parte lesa', 'posizionare il laccio emostatico', 'a', '2024-08-31 07:44:18', '2024-08-31 07:44:18'
            ],
            [
                8, 8, 'I segnali di allarme dell\'infarto cardiaco nell\'adulto sono:',
                'dolore o senso di oppressione al centro del torace o localizzato al collo, alla mandibola o in corrispondenza dello stomaco, sudorazione fredda, nausea, sensazione di \"mancanza di respiro\"', 'dolore anche di entità modesta, riferito anche come difficoltà respiratoria, non necessariamente sotto sforzo', 'tutti i precedenti', 'c', '2024-08-31 07:44:55', '2024-08-31 07:44:55'
            ],
            [
                9, 9, 'Il Basic Life Support comprende:',
                'il pronto riconoscimento dell\'assenza di coscienza respiro e circolo, l\'attivazione precoce del sistema di soccorso', 'l\'esecuzione della RCP in caso di arresto cardiaco', 'tutti i precedenti', 'c', '2024-08-31 07:45:20', '2024-08-31 07:45:20'
            ],
            [
                10, 10, 'Le manovre di Rianimazione Cardio Polmonare (R.P.C.) nell\'adulto si effettuano:',
                'quando la vittima è cosciente, ma lamenta un forte dolore retro sternale', 'in mancanza della sola funzione \"coscienza\"', 'sempre a seguito di una valutazione', 'c', '2024-08-31 07:45:36', '2024-08-31 07:45:36'
            ],
            [
                11, 11, 'Il \"gasping\" o respiro agonico:',
                'è un tipo di respirazione inefficace che rende indicata la respirazione artificiale', 'è un tipo di respirazione poco efficace', 'è indice di crisi asmatica', 'a', '2024-08-31 07:46:01', '2024-08-31 07:46:01'
            ],
            [
                12, 12, 'Per poter effettuare un massaggio cardiaco esterno, efficace nell\'adulto, occorre:',
                'essere in due operatori', 'comprimere sulla metà dello sterno, verso la colonna vertebrale, facendo abbassare lo stesso almeno 4 - 5 centimetri', 'ventilare con immediata sequenzialità per evitare il ristagno del sangue', 'b', '2024-08-31 07:46:19', '2024-08-31 07:46:19'
            ],
            [
                13, 13, 'La presenza della coscienza in una vittima adulta, in cui si esclude la possibilità che sia traumatizzata, si effettua:',
                'palpando il polso carotideo', 'osservando i segni di circolo e facendo GAS', 'chiamando e scuotendo la vittima.', 'c', '2024-08-31 07:46:38', '2024-08-31 07:46:38'
            ],
            [
                14, 14, 'La \"catena della sopravvivenza\":',
                'è utile a tutti i soccorritori: sottolinea l\'importanza della sequenzialità e precocità degli interventi', 'è utile ai sistema di soccorso per attivare il mezzo più adatto', 'serve al soccorritore esperto per capire la patologia della vittima', 'a', '2024-08-31 07:47:05', '2024-08-31 07:47:05'
            ],
            [
                15, 15, 'Il pallone autoespandibile è utile per:',
                'apportare alla vittima di arresto respiratorio una percentuale adeguata di ossigeno', 'riuscire a ventilare anche in presenza di ostruzione profonda delle vie aeree', 'espandere con successo i polmoni', 'a', '2024-08-31 07:47:53', '2024-08-31 07:47:53'
            ],
            [
                16, 16, 'Le insufflazioni con il sistema pallone - maschera nell\'adulto:',
                'si applicano alla frequenza di 30 ogni 2 minuti', 'possono provocare distensione gastrica se la maschera non aderisce perfettamente al volto', 'possono provocare distensione gastrica e rigurgito se il capo non è ipresteso', 'c', '2024-08-31 07:48:10', '2024-08-31 07:48:10'
            ],
            [
                17, 17, 'L\'obiettivo fondamentale del BLS è:',
                'il ripristino delle funzioni vitali', 'la prevenzione del danno anossico celebrale', 'la prevenzione della morte cardiaca improvvisa', 'b', '2024-08-31 07:48:26', '2024-08-31 07:48:26'
            ],
            [
                18, 18, 'La percentuale di ossigeno che si può ottenere collegando il pallone autoespandibile alla fonte di ossigeno senza il reservoire è circa il:',
                '21%', '16%', '40-50%', 'c', '2024-08-31 07:49:01', '2024-08-31 07:49:01'
            ],
            [
                19, 19, 'Il più efficace sistema di ventilazione artificiale è:',
                'bocca a bocca', 'pallone, maschera, ossigeno, reservoire', 'pallone maschera reservoire', 'b', '2024-08-31 07:49:22', '2024-08-31 07:49:22'
            ],
            [
                20, 20, 'Quale delle seguenti affermazioni è vera:',
                'una persona che non ha circolo può anche non respirare', 'una persona che non ha circolo non può avere un attività respiratoria', 'una persona che non respira non ha mai attività circolatoria', 'b', '2024-08-31 07:49:42', '2024-08-31 07:49:42'
            ],
            [
                21, 21, 'La cannula faringea o di Guédel serve:',
                'per agevolare il mantenimento della pervietà delle vie aeree', 'per asportare eventuali corpi estranei', 'al posto dell\'iperestensione', 'a', '2024-08-31 07:49:59', '2024-08-31 07:49:59'
            ],
            [
                22, 22, 'La ventilazione con pallone autoespandibile, senza alcun ausilio, somministra una percentuale di ossigeno pari al:',
                '100%', 'circa 21%', 'dipende dalla frequenza di respirazione', 'b', '2024-08-31 07:50:20', '2024-08-31 07:50:20'
            ],
            [
                23, 23, 'Il DAE in un arresto cardiaco, di un individuo adulto, và utilizzato:',
                'successivamente alla valutazione negativa dell\'assenza di respiro e segni di vita, dopo aver eseguito 2 minuti di RCP', 'subito dopo aver garantito la pervietà delle vie aeree', 'successivamente alla valutazione dell\'assenza di coscienza', 'a', '2024-08-31 07:50:37', '2024-08-31 07:50:37'
            ],
            [
                24, 24, 'Se il DAE non funziona:',
                'chiedi un altro DAE al sistema di emergenza', 'inizi la RCP', 'tutte le precedenti', 'c', '2024-08-31 07:50:59', '2024-08-31 07:50:59'
            ],
            [
                25, 25, 'E\' necessario sospendere la RCP e non toccare la vittima durante l\'analisi del DAE perché:',
                'si mantiene un circolo efficace', 'si possono alterare i dati che l\'apparecchio sta analizzando', 'si può essere investiti da una scarica elettrica fortissima', 'c', '2024-08-31 07:51:18', '2024-08-31 07:51:18'
            ],
            [
                26, 26, 'In caso di vittima incosciente, ma con respiro e polso presenti:',
                'non intervenire con il DAE', 'scoprire il torace della vittima e posizionare comunque gli elettrodi del DAE', 'accendere l\'apparecchio, collegare il connettore, ma non posizionare gli elettrodi', 'a', '2024-08-31 07:51:36', '2024-08-31 07:51:36'
            ],
            [
                27, 27, 'Il DAE può essere efficace nel caso che la vittima abbia:',
                'dolore toracico e perdita di coscienza', 'fibrillazione ventricolare o tachicardia ventricolare senza polso', 'arresto respiaratorio', 'b', '2024-08-31 07:52:03', '2024-08-31 07:52:03'
            ],
            [
                28, 28, 'I soggetti vittime di eventi traumatici muoiono principalmente:',
                'per mancanza di ossigeno e aumento di anidride carbonica', 'perché non vengono trattati correttamente dentro l\'ospedale', 'per le infezioni', 'a', '2024-08-31 07:52:24', '2024-08-31 07:52:24'
            ],
            [
                29, 29, 'Entro un\'ora dall\'evento traumatico, per aumentare le possibilità di sopravvivenza della vittima dovremmo:',
                'immobilizzare il rachide cervicale', 'ricoverare la vittima in un qualsiasi ospedale', 'eseguire il triage', 'b', '2024-08-31 07:52:53', '2024-08-31 07:52:53'
            ],
            [
                30, 30, 'Non si mette la testa in posizione neutra quando:',
                'la manovra suscita estrema dolorabilità', 'la vittima non è cosciente', 'la vittima ha la trachea deviata', 'a', '2024-08-31 07:53:10', '2024-08-31 07:53:10'
            ],
            [
                31, 31, 'Quale domanda faresti alla vittima per valutarne lo stato di coscienza?',
                'quanti anni ha', 'si ricorda cosa è successo', 'si ricorda dove abita', 'b', '2024-08-31 07:53:36', '2024-08-31 07:53:36'
            ],
            [
                32, 32, 'La mancata motilità degli arti:',
                'presume sempre lesione midollare', 'si segnala e si considera un parametro importante da riferire al 118', 'non è un parametro importante per l\'équipe di base', 'b', '2024-08-31 07:54:42', '2024-08-31 07:54:42'
            ],
            [
                33, 33, 'Sono considerati segni e sintomi di trauma vertebrale:',
                'formicolio e mancata sensibilità agli arti inferiori', 'dolore al dorso', 'sia A che B', 'c', '2024-08-31 07:55:23', '2024-08-31 07:55:23'
            ],
            [
                34, 34, 'E\' considerato soggetto a rischio di trauma grave:',
                'vittima annegata', 'vittima di ictus', 'ciclista che giace a 7 metri dalla bicicletta', 'c', '2024-08-31 07:55:40', '2024-08-31 07:55:40'
            ],
            [
                35, 35, 'La principale causa di morte in caso di evento traumatico è:',
                'la rottura del cranio', 'la perdita di coscienza', 'la mancanza d\'ossigeno', 'c', '2024-08-31 07:56:07', '2024-08-31 07:56:07'
            ],
            [
                36, 36, 'L\'Ora d\'oro, è un concetto che si riferisce a:',
                'la necessità di centralizzare una vittima in un centro attrezzato entro un\'ora dall\'evento', 'la possibilità di posticipare di un\' ora circa il trattamento avanzato a vantaggio di un efficiente soccorso di base', 'la necessità di valutare la vittima di un evento traumatico incidentale entro un\'ora dal sinistro', 'a', '2024-08-31 07:59:11', '2024-08-31 07:59:11'
            ],
            [
                37, 37, 'Indica la giusta sequenza operativa in riferimento a quanto espresso con \"la Catena della Sopravvivenza nel traumatizzato\":',
                'allarme precoce, rianimazione precoce, centralizzazione, triage', 'allarme precoce, triage sul posto, trattamento preospedaliero, trattamento ospedaliero centralizzazione', 'allarme precoce, triage sul posto, trattamento preoospedaliero, centralizzazione, trattamento ospedaliero', 'c', '2024-08-31 07:59:32', '2024-08-31 07:59:32'
            ],
            [
                38, 38, 'Quali operazioni compi prioritariamente su un soggetto vittima di evento traumatico incidentale privo di coscienza:',
                'immobilizzi la testa, valuti la pervietà delle vie aeree', 'immobilizzi la testa, chiami e scuoti la vittima e allerti la Centrale operativa 1-1-8 facendo portare un Defibrillatore semi Automatico Esterno', 'allerti la Centrale Operativa 1-1-8, allinei e scopri il torace, valuti la presenza di respiro spontaneo', 'a', '2024-08-31 08:00:29', '2024-08-31 08:00:29'
            ],
            [
                39, 39, 'La vittima cosciente deve essere:',
                'trattata come quella incosciente, la procedura non cambia', 'approcciata considerando l\'aspetto relazionale, informandola prima di agire', 'stabilizzata, poi valutata', 'b', '2024-08-31 08:00:59', '2024-08-31 08:00:59'
            ],
            [
                40, 40, 'Il collare cervicale è:',
                'un dispositivo per l\'immobilizzazione totale del rachide cervicale', 'un presidio non indispensabile ai fini dell\'immobilizzazione', 'un dispositivo che aiuta ad immobilizzare il rachide cervicale della vittima', 'c', '2024-08-31 09:42:21', '2024-08-31 09:42:21'
            ],
            [
                41, 41, 'La destinazione ospedaliera (centralizzazione) della vittima di un evento traumatico è decisa:',
                'dalla Centrale Operativa 1-1-8', 'dalla Centrale Operativa 1-1-5 sulla scorta dell\'esperienza e della conoscenza del territorio di competenza', 'dal personale sanitario sul posto', 'a', '2024-08-31 09:42:45', '2024-08-31 09:42:45'
            ],
            [
                42, 42, 'Sono considerati segni di possibile trauma vertebrale:',
                'il trauma al di sopra della clavicola', 'la copiosa emorragia all\'arto superiore destro', 'la ferita sotto il ginocchio', 'a', '2024-08-31 09:43:04', '2024-08-31 09:43:04'
            ],
            [
                43, 43, 'La barella scoop bi-valva o \"cucchiaio\", deve essere utilizzata per:',
                'l\'immobilizzazione di vittime di trauma', 'la raccolta di soggetti vittima non traumatizzati', 'l\'immobilizzazione parziale di vittime di trauma', 'b', '2024-08-31 09:43:21', '2024-08-31 09:43:21'
            ],
            [
                44, 44, 'Per il posizionamento della vittima sulla barella scoop bi-valva o \"cucchiaio\", occorrono:',
                'due persone addestrate', 'tre persone addestrate', 'quattro persone addestrate', 'b', '2024-08-31 09:43:45', '2024-08-31 09:43:45'
            ],
            [
                45, 45, 'La tavola spinale è:',
                'un dispositivo per l\'immobilizzazione parziale delle vittime di evento traumatico', 'un dispositivo che deve essere utilizzato per l\'immobilizzazione della vittima di evento traumatico incidentale', 'l\'unico strumento idoneo per il trasporto di qualsiasi tipologia di feriti', 'b', '2024-08-31 09:44:22', '2024-08-31 09:44:22'
            ],
            [
                46, 46, 'La manovra di sollevamento a ponte è:',
                'una tecnica di movimentazione ordinaria della vittima di evento traumatico non grave', 'una tecnica per girare la vittima quando non si presenta supina (faccia verso l\'alto)', 'una manovra di emergenza, che si attua quando le altre tecniche di movimentazione risultano impossibili o non sicure per la vittima', 'c', '2024-08-31 09:44:41', '2024-08-31 09:44:41'
            ],
            [
                47, 47, 'In caso di sospetta frattura alla colonna vertebrale bisogna:',
                'procedere allo spostamento solo con tecniche adeguate', 'trascinare l\'infortunato sopra un piano che deve essere assolutamente rigido e poi procedere al trasporto fino all\'ospedale più vicino', 'non fare assolutamente nulla fino all\'arrivo di una equipe sanitaria', 'a', '2024-08-31 09:44:58', '2024-08-31 09:44:58'
            ],
            [
                48, 48, 'In caso di sospetta lesione vertebrale è necessario:',
                'applicare una steccabenda a depressione', 'movimentare l\'infortunato con un asse spinale', 'mettere la vittima in posizione laterale di sicurezza', 'b', '2024-08-31 09:45:17', '2024-08-31 09:45:17'
            ],
            [
                49, 49, 'Il triage prevede:',
                'la valutazione rapida delle funzioni vitali, il rapido trattamento e l\'attribuzione di un codice colore', 'l\'immediata stabilizzazione dei feriti più gravi', 'il trattamento sul campo delle vittime in arresto cardiorespiratorio', 'a', '2024-08-31 09:45:37', '2024-08-31 09:45:37'
            ],
            [
                50, 50, 'Le vittime con lesioni che ne mettano immediatamente a rischio la vita sono identificate con il codice',
                'giallo', 'rosso', 'verde', 'b', '2024-08-31 09:45:55', '2024-08-31 09:45:55'
            ],
            [
                51, 51, 'Le vittime in grado di camminare sono identificate con il codice:',
                'verde', 'giallo', 'rosso', 'a', '2024-08-31 09:46:34', '2024-08-31 09:46:34'
            ],
            [
                52, 52, 'Gli oggetti penetranti vanno:',
                'immediatamente estratti', 'fissati con un bendaggio e cerotto', 'lasciati così, senza alcun trattamento, se l\'Ospedale è a più di 20 minuti', 'b', '2024-08-31 09:47:20', '2024-08-31 09:47:20'
            ],
            [
                53, 53, 'Le fratture ossee possono essere:',
                'composte, scomposte, esposte', 'piccole, medie, gravi', 'verticali, diagonali, orizzontali', 'a', '2024-08-31 09:48:03', '2024-08-31 09:48:03'
            ],
            [
                54, 54, 'In presenza di una vittima con emorragia che si presenti in piedi il soccorritore deve:',
                'utilizzare il laccio emostatico', 'ospedalizzare velocemente', 'far sdraiare e iniziare la procedura prevista', 'c', '2024-08-31 09:48:24', '2024-08-31 09:48:24'
            ],
            [
                55, 55, 'I metodi utilizzabili per arrestare un\'emorragia esterna sono:',
                'solo il laccio, a valle della lesione', 'laccio emostatico, punti di compressione, pressione diretta e sollevamento dell\'arto', 'pressione diretta, sollevamento dell\'arto, punti di compressione e, per ultimo, laccio emostatico', 'c', '2024-08-31 09:48:44', '2024-08-31 09:48:44'
            ],
            [
                56, 56, 'Alcuni segni di un\'importante perdita di sangue sono:',
                'aumento del livello di coscienza', 'aumento della frequenza cardiaca e respiratoria, scomparsa del polso radiale, declino del livello di coscienza', 'iposensibilità agli arti', 'b', '2024-08-31 09:49:20', '2024-08-31 09:49:20'
            ],
            [
                57, 57, 'In caso di emorragia arteriosa, qualora sia indispensabile utilizzare il laccio emostatico, esso va posizionato:',
                'all\'altezza dell\'omero o del femore', 'subito a monte della ferita', 'subito a valle della ferita', 'b', '2024-08-31 09:49:43', '2024-08-31 09:49:43'
            ],
            [
                58, 58, 'Per un corretto trattamento delle ferite è necessario:',
                'ripulire con acqua corrente o soluzione fisiologica', 'disinfettare e applicare una medicazione', 'sia A che B', 'c', '2024-08-31 09:50:01', '2024-08-31 09:50:01'
            ],
            [
                59, 59, 'In caso di grave emorragia, il trattamento é:',
                'diverso a seconda che l\'emorragia sia arteriosa o venosa', 'quello previsto, indipendentemente dall\'origine arteriosa o venosa', 'lasciato alla discrezione dell\'operatore', 'b', '2024-08-31 09:50:25', '2024-08-31 09:50:25'
            ],
            [
                60, 60, 'Il primo trattamento di un\' ustione è:',
                'raffreddare con acqua o soluzione fisiologica e coprire con teli sterili', 'applicare pomata lenitiva', 'bucare e spremere le bolle', 'a', '2024-08-31 09:54:46', '2024-08-31 09:54:46'
            ],
            [
                61, 61, 'La classificazione delle ustioni in gradi (1°, 2° e 3°) riguarda:',
                'la temperatura che ha causato l\'ustione stessa', 'la parte corporea interessata', 'la profondità delle ustioni', 'c', '2024-08-31 09:55:05', '2024-08-31 09:55:05'
            ],
            [
                62, 62, 'In caso di ustione, i vestiti adesi vanno:',
                'rimossi manualmente per evitare infezioni', 'lasciati attaccati alla cute, raffreddati e coperti con teli sterili o almeno puliti', 'rimossi utilizzando le apposite pinze', 'b', '2024-08-31 09:55:32', '2024-08-31 09:55:32'
            ],
            [
                63, 63, 'In caso di ustione elettrica, il soccorritore deve:',
                'iniziare immediatamente il BLSD', 'praticare immediatamente solo BLS, senza usare il DAE', 'allontanare la vittima dalla fonte elettrica e valutare le funzioni vitali', 'c', '2024-08-31 09:56:02', '2024-08-31 09:56:02'
            ],
            [
                64, 64, 'In caso di ustione chimica ai bulbi oculari, è necessario:',
                'lavare la parte con soluzione fisiologica o prodotti specifici', 'non agire assolutamente sulla parte lesa e trasportare la vittima immediatamente in ospedale', 'chiudere entrambi gli occhi con garze asciutte', 'a', '2024-08-31 09:56:20', '2024-08-31 09:56:20'
            ],
            [
                65, 65, 'In caso di ustione chimica, le prime cose da fare sono:',
                'allontanare la vittima dall\'agente ustionante e lavare con acqua abbondantemente, fino alla totale rimozione dell\'agente ustionante', 'non agire mai sulla parte lesa e trasportare la vittima immediatamente in ospedale', 'fasciare stretto per impedire l\'allargamento dell\'ustione', 'a', '2024-08-31 09:56:36', '2024-08-31 09:56:36'
            ],
        ],
        [
            'Modulo 5'
        ],
    ],

    // True or false Questions

    tf_prevenction_b1s: [
        [
            'module_tf_1'
        ],
        [
            [
                1, 1, 'I  D.P.I. sono dispositivi di protezione individuale', 1, '2024-09-04 10:12:33', '2024-09-04 10:12:33'
            ],
            [
                2, 2, 'La protezione completa si ottiene indossando: casco - giaccone da interento - stivali - autorespiratore', 0, '2024-09-04 12:13:27', '2024-09-04 12:13:27'
            ],
            [
                3, 3, 'I guanti non fanno parte dell\'equipaggiamento da intervento', 0, '2024-09-04 12:13:49', '2024-09-04 12:13:49'
            ],
            [
                4, 4, 'Gli estintori a polvere non hanno bisogno di un sistema di pressurizzazione', 0, '2024-09-04 12:13:55', '2024-09-04 12:13:55'
            ],
            [
                5, 5, 'Le bombole dell\'autorespiratore a circuito aperto sono caricate con aria a 200/300 bar', 1, '2024-09-04 12:14:01', '2024-09-04 12:14:01'
            ],
            [
                6, 6, 'Le bombole dell\'autorespiratore a circuito aperto sono caricate con ossigeno a 200/300 bar', 0, '2024-09-04 12:14:06', '2024-09-04 12:14:06'
            ],
            [
                7, 7, 'In un autorespiratore il segnale acustico di avvertimento bassa pressione inizia a circa 50 atm', 1, '2024-09-04 12:14:12', '2024-09-04 12:14:12'
            ],
            [
                8, 8, 'In un autorespiratore il segnale acustico di avvertimento bassa pressione inizia a circa 100 atm', 0, '2024-09-04 12:14:17', '2024-09-04 12:14:17'
            ],
            [
                9, 9, 'La pressione erogata in maschera è di poco superiore alla pressione atmosferica', 1, '2024-09-04 12:14:25', '2024-09-04 12:14:25'
            ],
            [
                10, 10, 'Il segnale acustico di allarme si attiva quando il manometro dell\'autorespiratore segna circa 5 bar', 0, '2024-09-04 12:14:36', '2024-09-04 12:14:36'
            ],
            [
                11, 11, 'L\'autorepiratore non è necessario in presenza di una percentuale di ossigeno pari al 10%', 0, '2024-09-04 12:14:43', '2024-09-04 12:14:43'
            ],
            [
                12, 12, 'Il servizio antincendio deve essere dotato di tute di avvicinamento al fuoco, complete di guanti ed elmetto con visiera atermica', 1, '2024-09-04 12:14:49', '2024-09-04 12:14:49'
            ],
            [
                13, 13, 'Affinchè possa avvenire una combustione devono essere contemporaneamente presenti: il combustibile, il comburente e la temperatura idonea', 1, '2024-09-04 12:14:59', '2024-09-04 12:14:59'
            ],
            [
                14, 14, 'La combustione avviene ogni qualvolta vi sia contatto fra un combustibile ed un comburente', 0, '2024-09-04 12:15:08', '2024-09-04 12:15:08'
            ],
            [
                15, 15, 'Un combustibile, a temperatura superiore a quella di accensione, brucia se è a contatto con l\'aria', 1, '2024-09-04 12:15:14', '2024-09-04 12:15:14'
            ],
            [
                16, 16, 'Il tempo di combustione libera è quello intercorso fra l\'accensione e l\'avvenuto spegnimento', 0, '2024-09-04 12:15:22', '2024-09-04 12:15:22'
            ],
            [
                17, 17, 'In caso di incidente, i tempi di combustione libera devono essere i più lunghi possibile', 0, '2024-09-04 12:18:24', '2024-09-04 12:18:24'
            ],
            [
                18, 18, 'La combustione dei liquidi infiammabili avviene quando i vapori combustibili sono miscelati con l\'ossigeno dell\'aria in concentrazione compresa nel campo di infiammabilità', 0, '2024-09-04 12:18:31', '2024-09-04 12:18:31'
            ],
            [
                19, 19, 'L\'incendio è una reazione chimica che avviene con sviluppo di calore', 1, '2024-09-04 12:18:38', '2024-09-04 12:18:38'
            ],
            [
                20, 20, 'La classe A dei combustibili si riferisce ai solidi infiammabili', 1, '2024-09-04 12:18:44', '2024-09-04 12:18:44'
            ],
            [
                21, 21, 'La classe B dei combustibili si riferisce ai liquidi infiammabili',
                1, '2024-09-04 12:18:51', '2024-09-04 12:18:51'
            ],
            [
                22, 22, 'La classe C dei combustibili si riferisce ai gas infiammabili',
                1, '2024-09-04 12:18:59', '2024-09-04 12:18:59'
            ],
            [
                23, 23, 'La classe D dei combustibili si riferisce ai metalli infiammabili',
                1, '2024-09-04 12:19:06', '2024-09-04 12:19:06'
            ],
            [
                24, 24, 'La classe D dei combustibili si riferisce ai gas infiammabili',
                0, '2024-09-04 12:19:13', '2024-09-04 12:19:13'
            ],
            [
                25, 25, 'La classe C dei combustibili si riferisce ai solidi infiammabili',
                0, '2024-09-04 12:19:21', '2024-09-04 12:19:21'
            ],
            [
                26, 26, 'La classe A dei combustibili si riferisce ai liquidi infiammabili',
                0, '2024-09-04 12:19:27', '2024-09-04 12:19:27'
            ],
            [
                27, 27, 'Per estinguere un incendio si deve ricorrere ad uno dei seguenti sistemi: esaurimento del combustibile, soffocamento, raffreddamento',
                1, '2024-09-04 12:21:16', '2024-09-04 12:21:16'
            ],
            [
                28, 28, 'I vapori di un liquido infiammabile sono definiti comburenti',
                0, '2024-09-04 12:21:30', '2024-09-04 12:21:30'
            ],
            [
                29, 29, 'Separando il comburente dal combustibile viene a mancare uno dei tre elementi essenziali e, pertanto, la combustione termina',
                1, '2024-09-04 12:22:16', '2024-09-04 12:22:16'
            ],
            [
                30, 30, 'Secondo la Norma Europea EN2 la classificazione dei fuochi è la seguente: Classe A fuochi di materiali solidi Classe B fuochi di liquidi o di solidi liquefacibili Classe C fuochi di gas Classe D fuochi di metalli (magnesio, potassio, fosforo, sodio, ecc.)',
                1, '2024-09-04 12:22:24', '2024-09-04 12:22:24'
            ],
            [
                31, 31, 'Per scoppio si intende un fenomeno puramente fisico o meccanico senza produzione di fiamme e calore',
                1, '2024-09-04 12:22:30', '2024-09-04 12:22:30'
            ],
            [
                32, 32, 'L\'esplosione è un processo fisico di violento ed istantaneo innalzamento delle pressioni che si irradiano dal centro di esplosione',
                1, '2024-09-04 12:22:37', '2024-09-04 12:22:37'
            ],
            [
                33, 33, 'I prodotti della combustione sono sempre gli stessi indipendentemente dalla sostanza che brucia',
                0, '2024-09-04 12:22:44', '2024-09-04 12:22:44'
            ],
            [
                34, 34, 'Per far avvenire una combustione occorre sempre fornire calore',
                1, '2024-09-04 12:22:50', '2024-09-04 12:22:50'
            ],
            [
                35, 35, 'La temperatura di infiammabilità è la temperatura minima alla quale i liquidi infiammabili emettono vapori in quantità tali da incendiarsi in caso d\'innesco',
                1, '2024-09-04 12:22:58', '2024-09-04 12:22:58'
            ],
            [
                36, 36, 'In una sostanza liquida infiammabile concorrono all\'incendio i vapori emessi dall\'evaporazione della sostanza stessa',
                1, '2024-09-04 12:23:04', '2024-09-04 12:23:04'
            ],
            [
                37, 37, 'Gli agenti estinguenti aeroportuali si dividono in: principali e complementari',
                1, '2024-09-04 12:23:13', '2024-09-04 12:23:13'
            ],
            [
                38, 38, 'L\'estinguente principale è il liquido schiumogeno',
                0, '2024-09-04 12:26:14', '2024-09-04 12:26:14'
            ],
            [
                39, 39, 'L\'estinguente principale è l\'acqua per la produzione di schiuma',
                1, '2024-09-04 12:26:49', '2024-09-04 12:26:49'
            ],
            [
                40, 40, 'Gli estinguenti complementari ammessi sono esclusivamente la CO2 e le polveri chimiche',
                0, '2024-09-04 12:26:56', '2024-09-04 12:26:56'
            ],
            [
                41, 41, 'L\'estinguente complementare ammesso dalla normativa ICAO è la polvere chimica',
                1, '2024-09-04 12:27:01', '2024-09-04 12:27:01'
            ],
            [
                42, 42, 'Per normativa gli agenti estinguenti principali e complementari devono essere compatibili fra loro',
                1, '2024-09-04 12:27:07', '2024-09-04 12:27:07'
            ],
            [
                43, 43, 'Gli halons sono tra i migliori estinguenti complementari usati in aeroporto',
                0, '2024-09-04 12:27:14', '2024-09-04 12:27:14'
            ],
            [
                44, 44, 'Le polveri estinguenti polivalenti non esistono',
                0, '2024-09-04 12:27:20', '2024-09-04 12:27:20'
            ],
            [
                45, 45, 'L\'acqua, come sostanza estinguente, agisce per raffreddamento, soffocamento e per azione meccanica',
                1, '2024-09-04 12:27:29', '2024-09-04 12:27:29'
            ],
            [
                46, 46, 'L\'uso delle schiume è controindicato negli incendi di combustibili liquidi',
                0, '2024-09-04 12:27:36', '2024-09-04 12:27:36'
            ],
            [
                47, 47, 'La schiuma agisce nell\'estinzione attraverso azione di soffocamento e raffreddamento',
                1, '2024-09-04 12:27:42', '2024-09-04 12:27:42'
            ],
            [
                48, 48, 'La nebulizzazione dell\'acqua ne moltiplica la capacità di raffreddamento',
                1, '2024-09-04 12:27:48', '2024-09-04 12:27:48'
            ],
            [
                49, 49, 'Se per la produzione della schiuma si utilizza uno schiumogeno A.F.F.F. al posto di quello proteinico, si deve prevedere un maggiore quantitativo di acqua',
                0, '2024-09-04 12:27:56', '2024-09-04 12:27:56'
            ],
            [
                50, 50, 'Se per la produzione della schiuma si utilizza uno schiumogeno A.F.F.F. al posto di quello proteinico, si può diminuire il quantitativo di acqua',
                1, '2024-09-04 12:28:05', '2024-09-04 12:28:05'
            ],
            [
                51, 51, 'L\'acqua nebulizzata raffredda meno della stessa quantità erogata a getto pieno',
                0, '2024-09-04 12:28:13', '2024-09-04 12:28:13'
            ],
            [
                52, 52, 'Le polveri più usate in aeroporto sono quelle polivalenti dette anche "universali"',
                1, '2024-09-04 12:28:58', '2024-09-04 12:28:58'
            ],
            [
                53, 53, 'Le polveri usate in aeroporto sono polivalenti dette anche "specifiche aeroportuali"',
                0, '2024-09-04 12:29:08', '2024-09-04 12:29:08'
            ],
            [
                54, 54, 'Uno schiumogeno proteinico ha una efficacia estinguente maggiore di un terzo rispetto ad uno schiumogeno A.F.F.F.',
                0, '2024-09-04 12:29:17', '2024-09-04 12:29:17'
            ],
            [
                55, 55, 'Uno schiumogeno proteinico ha una efficacia estinguente minore di un terzo rispetto ad uno schiumogeno A.F.F.F.',
                1, '2024-09-04 12:29:34', '2024-09-04 12:29:34'
            ],
            [
                56, 56, 'Uno schiumogeno deve avere caratteristiche di bassa corrosività e basso punto di congelamento',
                1, '2024-09-04 12:29:42', '2024-09-04 12:29:42'
            ],
            [
                57, 57, 'Il tensioattivo presente nei liquidi schiumogeni ha la proprietà di diminuire la tensione superficiale dell\'acqua e favorire la formazione delle bolle d\'aria',
                1, '2024-09-04 12:29:49', '2024-09-04 12:29:49'
            ],
            [
                58, 58, 'Lo schiumogeno formante una pellicola, detto AFFF, è quello più comunemente usato in aeroporto/eliporto',
                1, '2024-09-04 12:29:56', '2024-09-04 12:29:56'
            ],
            [
                59, 59, 'Nell’incendio di un elicottero si devono affrontare fuochi di classe C',
                0, '2024-09-04 12:30:04', '2024-09-04 12:30:04'
            ],
            [
                60, 60, 'Le norme CEI classificano i fuochi in 4 classi (A, B, C, D)',
                0, '2024-09-04 12:30:11', '2024-09-04 12:30:11'
            ],
            [
                61, 61, 'Gli estinguenti ad halon sono stati banditi per ragioni connesse alla loro scarsa efficacia estinguente',
                0, '2024-09-04 12:30:19', '2024-09-04 12:30:19'
            ],
            [
                62, 62, 'I limiti di infiammabilità di una sostanza chimica si esprimono in temperature',
                0, '2024-09-04 12:30:25', '2024-09-04 12:30:25'
            ],
            [
                63, 63, 'La lancia antincendio serve per aumentare la portata d’acqua',
                0, '2024-09-04 12:30:34', '2024-09-04 12:30:34'
            ],
            [
                64, 64, 'In una sostanza chimica infiammabile combustibile solida o liquida concorrono all’incendio i vapori infiammabili emessi per evaporazione dalla sostanza stessa',
                1, '2024-09-04 12:30:41', '2024-09-04 12:30:41'
            ],
            [
                65, 65, 'In un estintore a CO2 il manometro presente misura la temperatura interna',
                0, '2024-09-04 12:30:52', '2024-09-04 12:30:52'
            ],
            [
                66, 66, 'La minima concentrazione di ossigeno nell’aria per la sopravvivenza umana è del 18%',
                1, '2024-09-04 12:30:59', '2024-09-04 12:30:59'
            ],
            [
                67, 67, 'I D.P.I. sono dispacci urgenti in caso d’incidente',
                0, '2024-09-04 12:31:05', '2024-09-04 12:31:05'
            ],
            [
                68, 68, 'Il fumo emesso dalla combustione dei materiali plastici è di colore bianco',
                0, '2024-09-04 12:31:10', '2024-09-04 12:31:10'
            ],
            [
                69, 69, 'La schiuma è un composto di acqua, liquido schiumogeno ed aria',
                1, '2024-09-04 12:31:47', '2024-09-04 12:31:47'
            ],
            [
                70, 70, 'La classe d’incendio A è relativa ai gas',
                0, '2024-09-04 12:31:57', '2024-09-04 12:31:57'
            ],
            [
                71, 71, 'Le polveri estinguenti sono a base di carbonato di sodio e potassio',
                1, '2024-09-04 12:32:10', '2024-09-04 12:32:10'
            ],
            [
                72, 72, 'La polvere non deve entrare in contatto con la schiuma',
                0, '2024-09-04 12:32:20', '2024-09-04 12:32:20'
            ],
            [
                73, 73, 'La tensione di vapore della benzina è minore di quella del gasolio',
                0, '2024-09-04 12:32:27', '2024-09-04 12:32:27'
            ],
            [
                74, 74, 'Più elevata è la tensione di vapore di un combustibile infiammabile, più è facile domare l’incendio',
                0, '2024-09-04 12:32:32', '2024-09-04 12:32:32'
            ],
            [
                75, 75, 'Il getto frazionato della lancia ha un minore potere di soffocamento di quello pieno',
                0, '2024-09-04 12:32:42', '2024-09-04 12:32:42'
            ],
            [
                76, 76, 'Negli schiumogeni sono sempre presenti additivi per favorirne la conservazione',
                1, '2024-09-04 12:32:50', '2024-09-04 12:32:50'
            ],
            [
                77, 77, 'Nella schiuma è presente una quantità d’acqua almeno del 75%',
                1, '2024-09-04 12:32:58', '2024-09-04 12:32:58'
            ],
            [
                78, 78, 'La lancia antincendio serve per aumentare la velocità dell’acqua',
                1, '2024-09-04 12:33:04', '2024-09-04 12:33:04'
            ],
            [
                79, 79, 'L’autorespiratore è caricato ad aria compressa',
                1, '2024-09-04 12:33:11', '2024-09-04 12:33:11'
            ],
            [
                80, 80, 'L’autoprotettore non è indispensabile in caso di presenza di ossigeno superiore al 10%',
                0, '2024-09-04 12:33:21', '2024-09-04 12:33:21'
            ],
            [
                81, 81, 'Un fuoco di classe A si riferisce ad un incendio di materiali solidi combustibili',
                1, '2024-09-04 12:33:27', '2024-09-04 12:33:27'
            ],
            [
                82, 82, 'In caso d’incendio, la visiera termica della tuta d’avvicinamento può venire a contatto con il viso senza conseguenze',
                0, '2024-09-04 12:33:34', '2024-09-04 12:33:34'
            ],
            [
                83, 83, 'Il magnesio è un metallo incombustibile',
                0, '2024-09-04 12:33:41', '2024-09-04 12:33:41'
            ],
            [
                84, 84, 'In un incendio di apparecchiature elettriche conviene usare la schiuma frazionata',
                0, '2024-09-04 12:33:49', '2024-09-04 12:33:49'
            ],
            [
                85, 85, 'La combustione consiste nella formazione di un miscuglio',
                0, '2024-09-04 12:33:58', '2024-09-04 12:33:58'
            ],
            [
                86, 86, 'Nella combustione la temperatura d’innesco dipende anche dalla pressione e dall’umidità relativa dell’aria',
                1, '2024-09-04 12:34:06', '2024-09-04 12:34:06'
            ],
            [
                87, 87, 'L’aria è costituita per la maggior parte da ossigeno',
                0, '2024-09-04 12:34:13', '2024-09-04 12:34:13'
            ],
            [
                88, 88, 'L’azoto è in grado di interagire chimicamente nella combustione',
                0, '2024-09-04 12:34:18', '2024-09-04 12:34:18'
            ],
            [
                89, 89, 'La schiuma si interpone tra il liquido infiammabile e l’aria, inibendo l’evaporazione e la miscelazione',
                1, '2024-09-04 12:34:27', '2024-09-04 12:34:27'
            ],
            [
                90, 90, 'La tensione superficiale si riferisce allo stato gassoso',
                0, '2024-09-04 12:34:34', '2024-09-04 12:34:34'
            ],
            [
                91, 91, 'La schiuma è l’agente estinguente ideale per fuochi di classe B',
                1, '2024-09-07 04:49:14', '2024-09-07 04:49:14'
            ],
            [
                92, 92, 'L’acqua congelata si riduce di volume',
                0, '2024-09-07 04:51:49', '2024-09-07 04:51:49'
            ],
            [
                93, 93, 'Durante l’estinzione, l’estinguente perde calore a vantaggio del combustibile',
                0, '2024-09-07 04:51:55', '2024-09-07 04:51:55'
            ],
            [
                94, 94, 'Per ottenere una combustione è necessaria la presenza di calore',
                1, '2024-09-07 04:52:03', '2024-09-07 04:52:03'
            ],
            [
                95, 95, 'Rispetto ai tre fattori che costituiscono il “triangolo del fuoco”, “smassare” il combustibile equivale a ridurre l’azione del comburente',
                0, '2024-09-07 04:52:26', '2024-09-07 04:52:26'
            ],
        ],
        [
            'modulo_tf_1'
        ]
    ],
});