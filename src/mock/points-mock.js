// export const mockPoints = []; // для проверки заглушки
/* export const mockPoints = [ // для проверки блокировки фильтров
  {
    'id': '5f9d6044-1287-494c-97c7-9387523e169f',
    'type': 'restaurant',
    'dateFrom': '2023-11-20T03:34:56.723Z',
    'dateTo': '2023-11-20T19:07:03.420Z',
    'destination': '63918c5c-66a5-4522-88dd-3a6b15bbe351',
    'basePrice': 1100,
    'isFavorite': false,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '445c6ce1-93a7-465a-bccd-52b1d075f972',
    'type': 'ship',
    'dateFrom': '2023-11-20T19:07:03.420Z',
    'dateTo': '2023-11-21T14:45:57.058Z',
    'destination': '63918c5c-66a5-4522-88dd-3a6b15bbe351',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      'ddc51794-070d-4a61-9625-e598d0e59389',
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      '2d57cd36-9d17-4415-905a-ef53caa9105b',
      '3bcf18f0-1a5f-4e2e-8339-18684c4c766f'
    ]
  },
  {
    'id': '0b925062-6725-4937-9cd6-b9d2e28aaaa5',
    'type': 'ship',
    'dateFrom': '2023-11-21T14:45:57.058Z',
    'dateTo': '2023-11-21T20:47:28.859Z',
    'destination': '21763c27-5d52-483a-8af7-af84e5814a9b',
    'basePrice': 500,
    'isFavorite': true,
    'offers': [
      'ddc51794-070d-4a61-9625-e598d0e59389',
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      'fe16e69b-9657-4b99-a5b1-b5f428459747',
      '3bcf18f0-1a5f-4e2e-8339-18684c4c766f'
    ]
  },
  {
    'id': '527b03f1-3a08-4712-b231-b5ef38e4ffb9',
    'type': 'sightseeing',
    'dateFrom': '2023-11-21T20:47:28.859Z',
    'dateTo': '2023-11-22T07:17:00.353Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 500,
    'isFavorite': false,
    'offers': []
  },
  {
    'id': 'ca814c64-7a8f-4031-954e-b09c21e3e98c',
    'type': 'drive',
    'dateFrom': '2023-11-22T07:17:00.353Z',
    'dateTo': '2023-11-22T18:34:52.034Z',
    'destination': '1b3a3cb9-f7f2-4db5-86cd-f31b1cf2275b',
    'basePrice': 300,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'd700a418-2313-4e98-9246-92302d7946be',
    'type': 'train',
    'dateFrom': '2023-11-22T18:34:52.034Z',
    'dateTo': '2023-11-23T14:55:53.288Z',
    'destination': '1378c813-4b3b-4251-95b9-5dc2830be376',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': 'fea8bab7-e6a0-4b10-b1cb-9573fe435b39',
    'type': 'restaurant',
    'dateFrom': '2023-11-23T14:55:53.288Z',
    'dateTo': '2023-11-24T02:02:24.011Z',
    'destination': '96e2cb7e-16ff-4332-94ba-e399fff15b99',
    'basePrice': 900,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '69f1bd80-e4b1-4dc2-a9fb-ddb936af71d1',
    'type': 'flight',
    'dateFrom': '2023-11-24T02:02:24.011Z',
    'dateTo': '2023-11-24T19:00:57.729Z',
    'destination': 'a956955a-4b89-4deb-b437-977a20d600a9',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      '2c79620c-1d5a-4161-9436-a3b121f27e83',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': '2fa3fc1c-2098-4ef3-b516-7243dacd1780',
    'type': 'ship',
    'dateFrom': '2023-11-24T19:00:57.729Z',
    'dateTo': '2023-11-24T23:43:19.300Z',
    'destination': 'fca27865-2aa8-4528-b18a-4ed0225e971f',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '5611e534-eacd-4b90-9bf7-b7aae348de6c',
      'a5dd9872-9701-4b01-9e6f-eb307b8c4aaa'
    ]
  },
  {
    'id': '9cadb86e-cc26-425b-a6be-3393a072176a',
    'type': 'bus',
    'dateFrom': '2023-11-24T23:43:19.300Z',
    'dateTo': '2023-11-25T20:44:09.425Z',
    'destination': '3935a66e-c336-4242-b66e-27c93e35058b',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '7d127792-37f2-488b-97bc-b532aebce24c',
    'type': 'check-in',
    'dateFrom': '2023-11-25T20:44:09.425Z',
    'dateTo': '2023-11-26T12:01:17.603Z',
    'destination': 'f17dec74-7db2-49c6-9a0d-6338a362539c',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '3f5b5abf-e4ea-43c4-8389-83c8d9df0442',
      'ae20b499-94f9-4e46-8770-5df60ae49909',
      'd75e73b4-a517-4fcb-b856-c3bb9f49e0a5'
    ]
  },
  {
    'id': 'c5a10bf6-9a56-466b-8806-769364008ee8',
    'type': 'bus',
    'dateFrom': '2023-11-26T12:01:17.603Z',
    'dateTo': '2023-11-26T16:40:35.490Z',
    'destination': 'cdc15e18-9849-4092-a7f2-b89a4ec5c196',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '8777f69b-80ca-4f39-994b-dc288383e4c0',
    'type': 'sightseeing',
    'dateFrom': '2023-11-26T16:40:35.490Z',
    'dateTo': '2023-11-26T19:28:29.408Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 800,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': '64d251fc-6e46-4f90-83c3-d5babed4e4ce',
    'type': 'flight',
    'dateFrom': '2023-11-26T19:28:29.408Z',
    'dateTo': '2023-11-26T21:40:55.951Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      'ff3e2f3f-9b88-440f-9680-cc4dea1f18e1',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': 'd9ade04f-29b8-4036-a94f-bf808587f7fc',
    'type': 'bus',
    'dateFrom': '2023-11-26T21:40:55.951Z',
    'dateTo': '2023-11-27T16:55:38.846Z',
    'destination': '3935a66e-c336-4242-b66e-27c93e35058b',
    'basePrice': 800,
    'isFavorite': false,
    'offers': [
      'ab23fcab-abb9-4190-b802-0ed08f6ea28e',
      'ed7962f5-4385-44ec-a55c-2ed49b64f035',
      'ca976d9f-0dd7-4469-8520-86c1182bb5f4'
    ]
  },
  {
    'id': '6cf3debd-05d5-465a-b471-c1c214e259c2',
    'type': 'flight',
    'dateFrom': '2023-11-27T16:55:38.846Z',
    'dateTo': '2023-11-28T03:01:29.708Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '334a3ca0-3c9d-4234-9e26-bc0fcb704784',
      'ff3e2f3f-9b88-440f-9680-cc4dea1f18e1',
      'cf3bf986-b6a3-41e6-882e-83663940975b',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': '4d4f5f88-4c0f-4c51-9a51-a1fb395ff2b8',
    'type': 'drive',
    'dateFrom': '2023-11-28T03:01:29.708Z',
    'dateTo': '2023-11-28T08:56:52.605Z',
    'destination': '962439e9-710f-40f4-803c-e404a1a57d27',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': '70f13ad4-ea42-48c6-81fa-8ebed003042e',
    'type': 'drive',
    'dateFrom': '2023-11-28T08:56:52.605Z',
    'dateTo': '2023-11-29T05:37:23.831Z',
    'destination': '774f2c2e-039f-4484-b989-4084ef029de3',
    'basePrice': 800,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'ac01923f-f076-4ac4-a284-38c0a0f902ab',
    'type': 'restaurant',
    'dateFrom': '2023-11-29T05:37:23.831Z',
    'dateTo': '2023-11-29T19:35:51.454Z',
    'destination': 'df3ddcaf-78d6-49b2-aab3-2d954216e277',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '78d88b42-0187-4b41-99d4-58b0dda8e1f2',
    'type': 'sightseeing',
    'dateFrom': '2023-11-29T19:35:51.454Z',
    'dateTo': '2023-11-30T04:38:15.579Z',
    'destination': '844d4013-1953-47f2-9c56-a745a15d6fd3',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': []
  }
];
*/

export const mockPoints = [
  {
    'id': '01de1c72-44d0-4af3-bb86-a7cf9fe723d9',
    'type': 'train',
    'dateFrom': '2023-11-04T00:58:50.051Z',
    'dateTo': '2023-11-04T19:59:22.606Z',
    'destination': '179db245-5389-4b5c-b126-f6b91b910912',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': 'dafcc4df-a2c9-4f48-9b9e-1fa7d2f226ac',
    'type': 'drive',
    'dateFrom': '2023-11-04T19:59:22.606Z',
    'dateTo': '2023-11-05T01:17:25.292Z',
    'destination': '96e2cb7e-16ff-4332-94ba-e399fff15b99',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'e13a5fd3-dc18-45f6-8205-fb4e20ff3c86',
    'type': 'train',
    'dateFrom': '2023-11-05T01:17:25.292Z',
    'dateTo': '2023-11-05T23:07:14.181Z',
    'destination': '962439e9-710f-40f4-803c-e404a1a57d27',
    'basePrice': 400,
    'isFavorite': false,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': '75d76dce-99c8-4753-8d48-171f052ffdbf',
    'type': 'taxi',
    'dateFrom': '2023-11-05T23:07:14.181Z',
    'dateTo': '2023-11-06T09:25:40.357Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 600,
    'isFavorite': true,
    'offers': [
      '96e801da-19f2-415a-aa24-5a915f325a35',
      '729b6025-85de-485a-9a01-e18db921e4b6',
      '209d6f48-5ac5-4970-bd0d-3dfc4f932ae6'
    ]
  },
  {
    'id': 'e181f838-1011-4881-9e53-459f5c901a7c',
    'type': 'check-in',
    'dateFrom': '2023-11-06T09:25:40.357Z',
    'dateTo': '2023-11-06T14:15:37.730Z',
    'destination': 'f2fbd454-91ee-4184-a162-8b555f527a47',
    'basePrice': 700,
    'isFavorite': true,
    'offers': [
      'd75e73b4-a517-4fcb-b856-c3bb9f49e0a5'
    ]
  },
  {
    'id': 'dbb822cb-b0d8-4e8f-892a-0e5468772a44',
    'type': 'restaurant',
    'dateFrom': '2023-11-06T14:15:37.730Z',
    'dateTo': '2023-11-07T03:43:51.376Z',
    'destination': 'cdc15e18-9849-4092-a7f2-b89a4ec5c196',
    'basePrice': 400,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': '7454bcdf-4c58-4f54-8ed2-a8450c08c812',
    'type': 'sightseeing',
    'dateFrom': '2023-11-07T03:43:51.376Z',
    'dateTo': '2023-11-08T03:16:10.774Z',
    'destination': '1b3a3cb9-f7f2-4db5-86cd-f31b1cf2275b',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': 'cd964f4e-1689-4480-a4e6-3d7fc5091f6a',
    'type': 'train',
    'dateFrom': '2023-11-08T03:16:10.774Z',
    'dateTo': '2023-11-09T03:05:44.969Z',
    'destination': '37faa568-b249-48ac-babd-78df38bafa66',
    'basePrice': 500,
    'isFavorite': true,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': '3985f163-314b-4df5-9cc8-9d229210fc10',
    'type': 'sightseeing',
    'dateFrom': '2023-11-09T03:05:44.969Z',
    'dateTo': '2023-11-09T10:37:27.931Z',
    'destination': '0b44333a-037a-469f-a22e-894a96e92c5f',
    'basePrice': 300,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': 'ebb440a9-0ab9-494b-bb83-8fd00b7445de',
    'type': 'taxi',
    'dateFrom': '2023-11-09T10:37:27.931Z',
    'dateTo': '2023-11-10T08:12:55.183Z',
    'destination': '762c650d-b95f-409e-93e1-247126f8c1cb',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': [
      '729b6025-85de-485a-9a01-e18db921e4b6',
      '209d6f48-5ac5-4970-bd0d-3dfc4f932ae6',
      'ba40315d-09e4-4c03-b824-eee045bc5178',
      '5a360f33-4a66-449a-bef8-707cc7376b2a'
    ]
  },
  {
    'id': '98d64371-597e-4407-b782-8772fe2f935a',
    'type': 'sightseeing',
    'dateFrom': '2023-11-10T08:12:55.183Z',
    'dateTo': '2023-11-10T23:50:12.811Z',
    'destination': '3935a66e-c336-4242-b66e-27c93e35058b',
    'basePrice': 1100,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': '53369308-abd8-41df-add2-73d010c77b35',
    'type': 'drive',
    'dateFrom': '2023-11-10T23:50:12.811Z',
    'dateTo': '2023-11-11T15:48:06.175Z',
    'destination': '0b44333a-037a-469f-a22e-894a96e92c5f',
    'basePrice': 900,
    'isFavorite': true,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'fc25e81c-45bf-4de9-af05-6ddae4e741f0',
    'type': 'check-in',
    'dateFrom': '2023-11-11T15:48:06.175Z',
    'dateTo': '2023-11-12T06:19:48.867Z',
    'destination': '0b44333a-037a-469f-a22e-894a96e92c5f',
    'basePrice': 900,
    'isFavorite': false,
    'offers': [
      'ae20b499-94f9-4e46-8770-5df60ae49909',
      'd75e73b4-a517-4fcb-b856-c3bb9f49e0a5'
    ]
  },
  {
    'id': 'fa103f6c-be87-472a-bb54-5720ca99e79c',
    'type': 'restaurant',
    'dateFrom': '2023-11-12T06:19:48.867Z',
    'dateTo': '2023-11-12T09:27:29.574Z',
    'destination': '6770541a-d429-4c1b-b1de-2a3167214777',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  },
  {
    'id': 'e5ed42f2-51c7-4749-ba40-87b3b49677ad',
    'type': 'drive',
    'dateFrom': '2023-11-12T09:27:29.574Z',
    'dateTo': '2023-11-13T01:46:14.279Z',
    'destination': '1378c813-4b3b-4251-95b9-5dc2830be376',
    'basePrice': 600,
    'isFavorite': false,
    'offers': [
      '8bb8c278-0627-4f67-aaa9-78ce7fc449b6',
      '7a108838-9f7a-4c60-b705-947fc3c40e3a'
    ]
  },
  {
    'id': 'e546315b-c907-423a-918c-1bbcdbe3a99a',
    'type': 'flight',
    'dateFrom': '2023-11-13T01:46:14.279Z',
    'dateTo': '2023-11-13T12:27:25.111Z',
    'destination': '6770541a-d429-4c1b-b1de-2a3167214777',
    'basePrice': 1100,
    'isFavorite': false,
    'offers': [
      '640deb85-4075-47f6-baa5-a8b2e11d37de',
      'cf3bf986-b6a3-41e6-882e-83663940975b',
      'a07d3b6e-98e3-4145-bd45-09fd6ffdf64c'
    ]
  },
  {
    'id': 'dd2f68e4-5466-4a89-96bc-825d9c268266',
    'type': 'sightseeing',
    'dateFrom': '2023-11-13T12:27:25.111Z',
    'dateTo': '2023-11-14T02:03:53.952Z',
    'destination': 'f2fbd454-91ee-4184-a162-8b555f527a47',
    'basePrice': 1000,
    'isFavorite': true,
    'offers': []
  },
  {
    'id': '432bb187-8c38-4de9-b8e9-c3584070ad43',
    'type': 'check-in',
    'dateFrom': '2023-11-14T02:03:53.952Z',
    'dateTo': '2023-11-14T11:43:57.649Z',
    'destination': 'cdc15e18-9849-4092-a7f2-b89a4ec5c196',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '3f5b5abf-e4ea-43c4-8389-83c8d9df0442',
      'd75e73b4-a517-4fcb-b856-c3bb9f49e0a5',
      'a52f6268-44bb-4e23-9a96-4bb78d267ef9'
    ]
  },
  {
    'id': 'd281489e-40a3-49e1-b772-db0e19794697',
    'type': 'train',
    'dateFrom': '2023-11-14T11:43:57.649Z',
    'dateTo': '2023-11-15T07:46:49.840Z',
    'destination': 'a956955a-4b89-4deb-b437-977a20d600a9',
    'basePrice': 1000,
    'isFavorite': false,
    'offers': [
      'c56662ff-2587-4564-8bec-5bc56388ab61',
      '0dc628ee-1ce6-4198-9ae0-6b094a3afb87',
      '96fe2271-d5f5-47aa-8d00-e878e72368b5'
    ]
  },
  {
    'id': 'b78f643a-b119-4829-8657-706820f961bb',
    'type': 'restaurant',
    'dateFrom': '2023-11-15T07:46:49.840Z',
    'dateTo': '2023-11-15T23:53:21.967Z',
    'destination': '96e2cb7e-16ff-4332-94ba-e399fff15b99',
    'basePrice': 300,
    'isFavorite': false,
    'offers': [
      '3f591653-4259-4891-9e3f-609e11fd5d36',
      'f24530f9-d1ae-4aa9-9a1c-89e31e815876'
    ]
  }
];

