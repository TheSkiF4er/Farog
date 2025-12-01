# Arog

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]() [![Downloads](https://img.shields.io/badge/downloads-—-blue)]() [![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

> **Arog — быстрый, безопасный и TypeScript-first runtime для современного веба.**
> Runtime, пакетник, бандлер и тест-раннер — в одном аккуратном бинарнике.

---

## Что такое Arog?

Arog — это современный JavaScript/TypeScript runtime, спроектированный для реальной работы в production: serverless, edge, microservices и CLI-утилит. Он сочетает совместимость с экосистемой Node.js и npm с удобством TypeScript «из коробки» и моделью безопасности по умолчанию.

---

## Почему Arog?

* **TypeScript-first** — запускайте `.ts` без внешних трансайлеров или сложных конфигураций.
* **Smooth Node migration** — инструменты миграции и максимальная совместимость с CommonJS/ESM и npm.
* **Secure-by-default** — явные разрешения на сеть/файлы/переменные окружения/процессы.
* **Single-binary DX** — одна команда — всё: запуск, сборка, тесты, пакетный менеджер.
* **WASM-first** — безопасная стратегия нативных аддонов через WebAssembly / FFI.
* **Оптимизация cold-start** — идеален для edge и serverless.

---

## Быстрый старт

### Установка (пример)

```bash
# macOS / Linux (пример)
curl -sSL https://install.arog.dev | sh
# или скачать релиз с GitHub Releases
```

### Инициализация проекта

```bash
arog init my-app
cd my-app
```

### Hello world (src/index.ts)

```ts
import { serve } from "arog/http";

serve({ port: 8080 }, () => new Response("Hello from Arog!"));
```

### Запуск

```bash
arog run src/index.ts
# при первом запуске Arog запросит разрешения на сеть/файлы
```

---

## Основные команды CLI

```
arog init [name]        # scaffold проекта (arog.toml, src/, tsconfig)
arog run <file>         # запуск .js/.ts — auto-compile
arog dev                # dev server с HMR
arog build              # production bundle / изображение
arog test               # запустить тесты
arog pm install         # пакетный менеджер (быстрая установка)
arog pm add <pkg>@ver   # добавить пакет
arog pm audit           # security scan
arog import-node        # автоматическая миграция из Node.js
arog shell              # secure REPL с запросом разрешений
```

---

## Миграция из Node.js

Мы сделали всё, чтобы переход был максимально лёгким:

* `arog import-node` — автоматически анализирует `package.json`, предлагает конвертацию скриптов и создаёт `arog.toml`.
* Поддержка CommonJS + ESM.
* Совместимость с большинством npm-пакетов; для нативных аддонов есть пути: rebuild под Arog ABI или порт на WASM.

---

## Конфигурация — `arog.toml` (пример)

```toml
name = "my-app"
version = "0.1.0"
main = "src/index.ts"
type = "module"

[permissions]
network = ["127.0.0.1:8080"]
fs = ["./data/*"]

[build]
target = "edge"
singleBinary = false
minify = true
```

---

## Структура репозитория

```
/
├─ runtime/        # core (Rust/C++), движок bindings
├─ cli/            # arog CLI
├─ stdlib/         # arog стандартная библиотека (http, fs, permissions...)
├─ packages/       # SDKs и вспомогательные пакеты
├─ examples/       # starter templates
├─ docs/
├─ website/
└─ README.md
```

---

## Безопасность и supply-chain

* Подписанные релизы (GPG / sigstore).
* `arog.lock` — детерминированные установки.
* Встроенный `arog pm audit` + CI-сканирование зависимостей.
* Политика: сообщения по `security@cajeer.ru` (PGP в SECURITY.md). Ответ об acknowledgement — в течение 72 часов.

---

## Roadmap (ключевые вехи)

* MVP: single binary, TS runtime, `arog run`, `arog pm install`, http module.
* M1: `arog import-node`, dev server с HMR, permissions model.
* M2: single-file build, WASM native plugins, cross-platform релизы.
* M3: LTS, governance, ecosystem growth.

---

## Вклад

Мы рады контрибьюторам! Перед PR:

1. Откройте issue с описанием или назначьте себя.
2. Следуйте `CONTRIBUTING.md`: кодстайл, тесты, CI.
3. Убедитесь, что PR содержит тесты и документацию для изменений.

Ищите метки `good-first-issue` и `help-wanted`.

---

## Полезные ссылки

* Документация (в разработке): `https://cajeer.ru`
* GitHub: `https://github.com/TheSkiF4er/Arog`
* Security: `security@cajeer.ru`

---

## Контакты

**Author:** TheSkiF4er
Project site / docs: [https://cajeer.ru](https://cajeer.ru) (в разработке)
GitHub: [https://github.com/TheSkiF4er/Arog](https://github.com/TheSkiF4er/Arog)

---

## Лицензия

Arog распространяется под лицензией **Apache-2.0** — см. файл `LICENSE`.
