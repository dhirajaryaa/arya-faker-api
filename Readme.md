# Fake REST API (Express + JSON Data)

A lightweight mock REST API built on **Express** using **local JSON files**.

- Uses your own real JSON data (no faker / no lorem)
- Useful for frontend development / testing / prototyping
- Supports searching, sorting, pagination, delay simulation

---

## Features

| Feature                      | Yes |
| ---------------------------- | :-: |
| GET list endpoints           | ✅  |
| GET single item by id / uuid | ✅  |
| Pagination `limit`, `skip`   | ✅  |
| Simulated delay `sleep` (ms) | ✅  |

---

## API Base URL

[http://localhost:4000/api](http://localhost:4000/api)

## Data Schemas (your actual JSON format)

### Post object

```json
{
  "id": 251,
  "title": "The majestic waterfall thundered down the mountainside",
  "body": "Its waters cascading in a frothy torrent, sending mist into the air...",
  "tags": ["waterfall", "majestic", "nature"],
  "reactions": { "likes": 703, "dislikes": 33 },
  "views": 867,
  "userId": 187
}
```

### Todo object

```json
{
  "id": "245",
  "title": "Possimus aliquid reprehenderit rem dicta et maiores.",
  "body": "The Duchess took her choice, and was going to remark myself...",
  "completed": false,
  "createdAt": "1996-03-12"
}
```

### User Profile object

```json
{
  "uuid": "83a9fbf5-9d69-36e0-9fbe-1bcaa54eb981",
  "name": "Supriya Mehan",
  "birthday": "1972-11-01",
  "avatar": {
    "title": "Ea odit animi fugit quia est.",
    "description": "Et cumque aliquam sapiente fugiat quia cumque...",
    "url": "https://picsum.photos/640/480"
  },
  "phone": "+261899274389",
  "country": "Bulgaria"
}
```

---

## Primary Keys

| Resource         | Primary Key | Type        |
| ---------------- | ----------- | ----------- |
| Posts            | `id`        | number      |
| Todos            | `id`        | number |
| Profiles (Users) | `uuid`      | UUID string |

---

## Endpoints

| Resource | List            | Single                                       |
| -------- | --------------- | -------------------------------------------- |
| Posts    | `/api/posts`    | `/api/posts/:id`                             |
| Todos    | `/api/todos`    | `/api/todos/:id`                             |
| Profiles | `/api/profiles` | `/api/profiles/:id` or `/api/profiles/:uuid` |

---

## Query Parameters

| Param   | Example       | Description         |
| ------- | ------------- | ------------------- |
| `limit` | `?limit=20`   | how many items      |
| `skip`  | `?skip=200`   | offset              |
| `sleep` | `?sleep=1500` | delay response (ms) |

### Example Combined

```
GET /api/posts?limit=10&skip=20&sleep=1200
```

---

## Run Locally

```bash
pnpm install
pnpm start
```

Default port → **4000**

---

## Why Exists?

- quickly fake an API
- test UI states / skeleton loading
- simulate slow network (sleep)
- test pagination / search / sort logic

---

MIT License
