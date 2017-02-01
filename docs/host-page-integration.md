# Interacting with the sidebar

## Show the sidebar:

It is possible to show the Hypothesis sidebar from a third party page
where it is embedded.

To add a `button` on a page to open the sidebar, simply
add the `data-hypothesis-trigger` attribute:

```html
<button data-hypothesis-trigger>
  Open sidebar
</button>
```

## Show the public annotation count:

It is possible to show the total number of public annotations, page notes and
orphans made on a third party page where the Hypothesis sidebar is embedded .

To display the annotation count in a `div` element, simply
add the `data-hypothesis-annotation-count` attribute to the `div`:

```html
<div data-hypothesis-annotation-count>
  Annotation count will appear here
</div>
```
