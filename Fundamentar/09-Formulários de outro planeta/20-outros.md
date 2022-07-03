# outros

Outros campos interessantes (mas que ainda não tem um ótimo suporte)

fique de olho em [caniuse.com](https://caniuse.com)

# \<input type="date">

```html

<label for="start">Start date:</label>

<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">

```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

# \<input type="datetime-local">

```html

<label for="meeting-time">Choose a time for your appointment:</label>

<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">

```

[Referência:](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)

# \<input type="month">

```html

<label for="start">Start month:</label>

<input type="month" id="start" name="start"
       min="2018-03" value="2018-05">

```

[Referência](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month)

# \<input type="time">

```html

<label for="appt">Choose a time for your meeting:</label>

<input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required>

<small>Office hours are 9am to 6pm</small>

```

[Referência](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time)

# \<input type="week">

```html

<label for="week">Choose a week in May or June:</label>

<input type="week" name="week" id="camp-week"
       min="2018-W18" max="2018-W26" required>

```

[Referência](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week)