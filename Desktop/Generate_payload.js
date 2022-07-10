[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, $0,0.00)}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random(blue, brown, green)}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, paragraphs)}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), YYYY-MM-ddThh:mm:ss Z)}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, words)}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]

[
    '{{repeat(5, 7)}}',
{
    transaction: {
      narration: '{{lorem(1, paragraphs)}}',
      amount: '{{floating(1000, 4000, 2, $0,0.00)}}',
      beneficiaryCurrencyCode: 'NGN',
      senderCurrencyCode: 'USD',
      amlReference: null,
      transactionReference: '{{guid()}}',
      transactionRate : 1,
      clientName: ''
    },
    beneficiary: {
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    accountNumber: '{{integer(2000000000, 4000000000)}}',
      bankName: '{{random("Providus", "Unity", "Stanbic", "Standard Chartered", "UBA", "Keystone", "Polaris", "Heritage", "First Bank of Nigeria","First City Monument Bank", "Ecobank", "Access", "Diamond", "Fidelity")}}',
      bankCode: '{{random("Providus", "Unity", "Stanbic", "Standard Chartered", "UBA", "Keystone", "Polaris", "Heritage", "First Bank of Nigeria","First City Monument Bank", "Ecobank", "Access", "Diamond", "Fidelity").trim().toUppercase}}',
      bankAddress: null,
      bankBranchAddress: null,
      bank_IBAN: null,
      state: null,
      swiftCode: null,
      city: '{{random("Lagos", "Ogun", "Oyo", "Abuja", "Kano", "Kaduna")}}',
      coreSystemId: null,
      firstName: '{{firstName()}}',
      lastName: '{{surname()}}',
      middleName: '{{surname()}}',
      countryCode: 'NG',
      phoneNumber: '1{{phone()}}',
      emailAddress: '{{email()}}'
    },
    sender: {
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      coreSystemId: null,
      identificationNumber: '{{random("Lagos", "Ogun", "Oyo", "Abuja", "Kano", "Kaduna").toUpperCase()}}{{floating(-90.000001, 90)}}',
      identificationType: '{{random("ID", "PASSPORT", "VIN", "NIN", "CREDITCARD", "VEHICLE LICENSE")}}',
      identificationDateOfIssue: '{{date(new Date(2021, 0, 1), new Date(), YYYY-MM-ddThh:mm:ss Z)}}',
      identificationExpiryDate: '{{date(new Date(2025, 0, 1), new Date(), YYYY-MM-ddThh:mm:ss Z)}}',
      firstName: '{{firstName()}}',
      middleName: '{{surname()}}',
      lastName:'{{surname()}}',
      countryCode: 'US',
      phoneNumber: '234{{phone()}}',
      emailAddress: '{{email()}}'
    }
  }
]