const defaultTheme = [
  {
    "keyword_code": "keyb",
    "drum_set_id": 0,
    "drum_part_id": 1,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/bass.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9iYXNzLndhdiIsImlhdCI6MTY2MzI3MTE3MiwiZXhwIjoxOTc4NjMxMTcyfQ.6wBITEmbipX2pe0iZ53EAHhFOTyRdMjgA3lpP4bWKH4"
  },
  {
    "keyword_code": "keyj",
    "drum_set_id": 0,
    "drum_part_id": 2,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/bass.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9iYXNzLndhdiIsImlhdCI6MTY2MzI3MTE3MiwiZXhwIjoxOTc4NjMxMTcyfQ.6wBITEmbipX2pe0iZ53EAHhFOTyRdMjgA3lpP4bWKH4"
  },
  {
    "keyword_code": "keyv",
    "drum_set_id": 0,
    "drum_part_id": 3,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/snare.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9zbmFyZS53YXYiLCJpYXQiOjE2NjMyODMxOTUsImV4cCI6MTk3ODY0MzE5NX0._Bvi_dwr91MmjvvYC2-VndinCMuRr5k2gfgtED8UP3o"
  },
  {
    "keyword_code": "keyc",
    "drum_set_id": 0,
    "drum_part_id": 4,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/snare.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9zbmFyZS53YXYiLCJpYXQiOjE2NjMyODMxOTUsImV4cCI6MTk3ODY0MzE5NX0._Bvi_dwr91MmjvvYC2-VndinCMuRr5k2gfgtED8UP3o"
  },
  {
    "keyword_code": "keyf",
    "drum_set_id": 0,
    "drum_part_id": 5,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/tom1.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC90b20xLndhdiIsImlhdCI6MTY2MzI4MzIxMSwiZXhwIjoxOTc4NjQzMjExfQ.DeRaW_TYnE4ZXgH5zuMMueFBEEfyK4247CISowwnweo"
  },
  {
    "keyword_code": "keyd",
    "drum_set_id": 0,
    "drum_part_id": 6,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/tom1.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC90b20xLndhdiIsImlhdCI6MTY2MzI4MzIxMSwiZXhwIjoxOTc4NjQzMjExfQ.DeRaW_TYnE4ZXgH5zuMMueFBEEfyK4247CISowwnweo"
  },
  {
    "keyword_code": "keyg",
    "drum_set_id": 0,
    "drum_part_id": 9,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/floor_tom.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9mbG9vcl90b20ud2F2IiwiaWF0IjoxNjYzMjgzMjI4LCJleHAiOjE5Nzg2NDMyMjh9.GLzyWV7ci52wbwHh25eP-3t-AxKRThjGQZBcE44j-WY&t=2022-09-15T23%3A07%3A06.765Z"
  },
  {
    "keyword_code": "keyh",
    "drum_set_id": 0,
    "drum_part_id": 10,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/floor_tom.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9mbG9vcl90b20ud2F2IiwiaWF0IjoxNjYzMjgzMjI4LCJleHAiOjE5Nzg2NDMyMjh9.GLzyWV7ci52wbwHh25eP-3t-AxKRThjGQZBcE44j-WY&t=2022-09-15T23%3A07%3A06.765Z"
  },
  {
    "keyword_code": "keyn",
    "drum_set_id": 0,
    "drum_part_id": 11,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/hi_hat.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9oaV9oYXQud2F2IiwiaWF0IjoxNjYzMjgzMjQyLCJleHAiOjE5Nzg2NDMyNDJ9.JLNzKTe-DdZUWhyvbIsKbIGIApQIoUtzRU5QUJrskhM"
  },
  {
    "keyword_code": "keyx",
    "drum_set_id": 0,
    "drum_part_id": 12,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/hi_hat.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9oaV9oYXQud2F2IiwiaWF0IjoxNjYzMjgzMjQyLCJleHAiOjE5Nzg2NDMyNDJ9.JLNzKTe-DdZUWhyvbIsKbIGIApQIoUtzRU5QUJrskhM"
  },
  {
    "keyword_code": "keym",
    "drum_set_id": 0,
    "drum_part_id": 13,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/open_hi_hat.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9vcGVuX2hpX2hhdC53YXYiLCJpYXQiOjE2NjMyODMyNjEsImV4cCI6MTk3ODY0MzI2MX0.In7G3hp_ERaFnnTsbHDYtE7y2f3c1qjHiz_AS1nfdyk&t=2022-09-15T23%3A07%3A39.484Z"
  },
  {
    "keyword_code": "keyz",
    "drum_set_id": 0,
    "drum_part_id": 14,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/open_hi_hat.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9vcGVuX2hpX2hhdC53YXYiLCJpYXQiOjE2NjMyODMyNjEsImV4cCI6MTk3ODY0MzI2MX0.In7G3hp_ERaFnnTsbHDYtE7y2f3c1qjHiz_AS1nfdyk&t=2022-09-15T23%3A07%3A39.484Z"
  },
  {
    "keyword_code": "keye",
    "drum_set_id": 0,
    "drum_part_id": 15,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/crash1.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9jcmFzaDEud2F2IiwiaWF0IjoxNjYzMjgzMjc0LCJleHAiOjE5Nzg2NDMyNzR9.-4wWecfnZaFcqdTFRYIG61DuiFHxGXq7b1GZI6Jzpuo"
  },
  {
    "keyword_code": "keyu",
    "drum_set_id": 0,
    "drum_part_id": 16,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/crash2.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9jcmFzaDIud2F2IiwiaWF0IjoxNjYzMjgzMjgxLCJleHAiOjE5Nzg2NDMyODF9.3zJXxANEK063YxrEZ0itlHGwVYJd5zBRJ0ZWV6ddB38&t=2022-09-15T23%3A08%3A00.020Z"
  },
  {
    "keyword_code": "keyr",
    "drum_set_id": 0,
    "drum_part_id": 17,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/splash.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9zcGxhc2gud2F2IiwiaWF0IjoxNjYzMjgzMjkxLCJleHAiOjE5Nzg2NDMyOTF9.t8SEe_Mfw_xLEpmCuVZR1YqXgqTbF6RA6noWufHVcHc&t=2022-09-15T23%3A08%3A09.651Z"
  },
  {
    "keyword_code": "keyy",
    "drum_set_id": 0,
    "drum_part_id": 18,
    "volume": 1.0,
    "sound_url": "https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/ride.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9yaWRlLndhdiIsImlhdCI6MTY2MzI4MzMwMiwiZXhwIjoxOTc4NjQzMzAyfQ.NvR4uB8xqMxQPXWSRdOL64pblJV2nV_dBtI-Fz53coY&t=2022-09-15T23%3A08%3A20.038Z"
  }
]

export default defaultTheme