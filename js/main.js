
const app = new Vue({
  el: '#pippo',
  data: {
    variabile: "testo di esempio",
    numero: 1,
    isActive: true,
    i: 0,
    nomeutente: "nome vuoto",
    etautente: "eta vuota",
    emailutente: "email vuota",
    userpost: [
      {
        "age": 34,
        "name": "Kenya Tanner",
        "email": "kenyatanner@zilphur.com",
        "post": [
          {
            "text": "reprehenderit",
            "likes": 65,
            "published": "2022-06-29T02:33:20 -02:00"
          },
          {
            "text": "ipsum",
            "likes": 78,
            "published": "2022-02-11T01:50:30 -01:00"
          },
          {
            "text": "eu",
            "likes": 115,
            "published": "2022-04-12T01:17:09 -02:00"
          },
          {
            "text": "nulla",
            "likes": 22,
            "published": "2022-06-27T01:22:50 -02:00"
          },
          {
            "text": "occaecat",
            "likes": 82,
            "published": "2022-02-12T03:52:34 -01:00"
          },
          {
            "text": "pariatur",
            "likes": 48,
            "published": "2022-05-25T04:29:59 -02:00"
          },
          {
            "text": "do",
            "likes": 19,
            "published": "2022-06-03T04:45:44 -02:00"
          }
        ]
      },
      {
        "age": 20,
        "name": "Kimberly Blankenship",
        "email": "kimberlyblankenship@zilphur.com",
        "post": [
          {
            "text": "nulla",
            "likes": 22,
            "published": "2022-03-23T04:14:28 -01:00"
          },
          {
            "text": "ad",
            "likes": 1,
            "published": "2022-07-08T12:00:43 -02:00"
          },
          {
            "text": "sit",
            "likes": 79,
            "published": "2022-06-15T11:29:13 -02:00"
          },
          {
            "text": "cillum",
            "likes": 2,
            "published": "2022-06-08T02:36:08 -02:00"
          },
          {
            "text": "ex",
            "likes": 79,
            "published": "2022-07-09T06:56:34 -02:00"
          },
          {
            "text": "sint",
            "likes": 123,
            "published": "2022-02-02T02:25:23 -01:00"
          },
          {
            "text": "consequat",
            "likes": 51,
            "published": "2022-04-13T10:06:02 -02:00"
          },
          {
            "text": "amet",
            "likes": 10,
            "published": "2022-07-17T01:30:13 -02:00"
          },
          {
            "text": "consequat",
            "likes": 111,
            "published": "2022-06-26T01:26:32 -02:00"
          }
        ]
      },
      {
        "age": 35,
        "name": "Nash Booker",
        "email": "nashbooker@zilphur.com",
        "post": [
          {
            "text": "incididunt",
            "likes": 42,
            "published": "2022-08-21T12:04:11 -02:00"
          },
          {
            "text": "reprehenderit",
            "likes": 28,
            "published": "2022-08-05T02:33:14 -02:00"
          },
          {
            "text": "ipsum",
            "likes": 35,
            "published": "2022-08-25T05:27:37 -02:00"
          },
          {
            "text": "consequat",
            "likes": 59,
            "published": "2022-08-23T10:06:09 -02:00"
          },
          {
            "text": "consequat",
            "likes": 114,
            "published": "2022-01-22T11:05:33 -01:00"
          },
          {
            "text": "Lorem",
            "likes": 89,
            "published": "2022-02-05T12:00:02 -01:00"
          },
          {
            "text": "esse",
            "likes": 43,
            "published": "2022-07-23T04:29:10 -02:00"
          }
        ]
      },
      {
        "age": 34,
        "name": "Vance Fuentes",
        "email": "vancefuentes@zilphur.com",
        "post": [
          {
            "text": "adipisicing",
            "likes": 15,
            "published": "2022-07-23T01:58:49 -02:00"
          },
          {
            "text": "amet",
            "likes": 57,
            "published": "2022-02-04T10:34:26 -01:00"
          },
          {
            "text": "ad",
            "likes": 109,
            "published": "2022-07-12T05:47:02 -02:00"
          },
          {
            "text": "id",
            "likes": 19,
            "published": "2022-10-12T09:48:23 -02:00"
          },
          {
            "text": "duis",
            "likes": 97,
            "published": "2022-05-01T07:19:53 -02:00"
          },
          {
            "text": "Lorem",
            "likes": 13,
            "published": "2022-07-16T06:48:11 -02:00"
          }
        ]
      },
      {
        "age": 30,
        "name": "Lowery Page",
        "email": "lowerypage@zilphur.com",
        "post": [
          {
            "text": "laboris",
            "likes": 48,
            "published": "2022-02-22T08:45:38 -01:00"
          },
          {
            "text": "fugiat",
            "likes": 1,
            "published": "2022-08-05T04:33:00 -02:00"
          },
          {
            "text": "quis",
            "likes": 1,
            "published": "2022-08-11T08:14:43 -02:00"
          },
          {
            "text": "quis",
            "likes": 89,
            "published": "2022-01-14T05:19:27 -01:00"
          },
          {
            "text": "non",
            "likes": 123,
            "published": "2022-06-06T06:43:18 -02:00"
          },
          {
            "text": "minim",
            "likes": 74,
            "published": "2022-07-02T04:20:31 -02:00"
          },
          {
            "text": "nulla",
            "likes": 13,
            "published": "2022-10-10T10:46:10 -02:00"
          },
          {
            "text": "id",
            "likes": 87,
            "published": "2022-08-20T06:46:56 -02:00"
          },
          {
            "text": "sit",
            "likes": 64,
            "published": "2022-05-02T03:43:00 -02:00"
          },
          {
            "text": "Lorem",
            "likes": 67,
            "published": "2022-01-12T07:39:31 -01:00"
          }
        ]
      },
      {
        "age": 33,
        "name": "Clarice Tillman",
        "email": "claricetillman@zilphur.com",
        "post": [
          {
            "text": "commodo",
            "likes": 120,
            "published": "2022-10-13T07:52:57 -02:00"
          },
          {
            "text": "ullamco",
            "likes": 122,
            "published": "2022-09-25T07:00:08 -02:00"
          },
          {
            "text": "occaecat",
            "likes": 82,
            "published": "2022-03-06T01:33:38 -01:00"
          },
          {
            "text": "cillum",
            "likes": 4,
            "published": "2022-02-23T06:43:40 -01:00"
          },
          {
            "text": "magna",
            "likes": 41,
            "published": "2022-01-21T02:39:19 -01:00"
          },
          {
            "text": "adipisicing",
            "likes": 28,
            "published": "2022-05-19T07:11:17 -02:00"
          },
          {
            "text": "quis",
            "likes": 6,
            "published": "2022-08-23T11:24:57 -02:00"
          }
        ]
      }
    ]
  },
  methods: {
    /** (uers.name,user.age, user.email) */
    visualizzaUtente(nome, eta, indirizzo){

      console.log('cliccato');
      console.log(nome, eta, indirizzo);

      this.nomeutente = nome;
      this.etautente = eta;
      this.emailutente = indirizzo;

    },
    printObj() {
      console.log(this.userpost);
    },
    eleButton(operazione) {
      if (operazione == 'somma') {
        this.i++;
      } else if (operazione == 'sottrai') {
        this.i--;
      }
      console.log(this.i);
    },
  }
});

