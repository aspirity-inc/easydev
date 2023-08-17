declare module 'astro:content' {
  interface Render {
    '.mdx': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  export { z } from 'astro/zod';
  export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

  // TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
  /**
   * @deprecated
   * `astro:content` no longer provide `image()`.
   *
   * Please use it through `schema`, like such:
   * ```ts
   * import { defineCollection, z } from "astro:content";
   *
   * defineCollection({
   *   schema: ({ image }) =>
   *     z.object({
   *       image: image(),
   *     }),
   * });
   * ```
   */
  export const image: never;

  // This needs to be in sync with ImageMetadata
  export type ImageFunction = () => import('astro/zod').ZodObject<{
    src: import('astro/zod').ZodString;
    width: import('astro/zod').ZodNumber;
    height: import('astro/zod').ZodNumber;
    format: import('astro/zod').ZodUnion<
      [
        import('astro/zod').ZodLiteral<'png'>,
        import('astro/zod').ZodLiteral<'jpg'>,
        import('astro/zod').ZodLiteral<'jpeg'>,
        import('astro/zod').ZodLiteral<'tiff'>,
        import('astro/zod').ZodLiteral<'webp'>,
        import('astro/zod').ZodLiteral<'gif'>,
        import('astro/zod').ZodLiteral<'svg'>
      ]
    >;
  }>;

  type BaseSchemaWithoutEffects =
    | import('astro/zod').AnyZodObject
    | import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
    | import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
    | import('astro/zod').ZodIntersection<import('astro/zod').AnyZodObject, import('astro/zod').AnyZodObject>;

  type BaseSchema = BaseSchemaWithoutEffects | import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

  export type SchemaContext = { image: ImageFunction };

  type DataCollectionConfig<S extends BaseSchema> = {
    type: 'data';
    schema?: S | ((context: SchemaContext) => S);
  };

  type ContentCollectionConfig<S extends BaseSchema> = {
    type?: 'content';
    schema?: S | ((context: SchemaContext) => S);
  };

  type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

  export function defineCollection<S extends BaseSchema>(input: CollectionConfig<S>): CollectionConfig<S>;

  type AllValuesOf<T> = T extends any ? T[keyof T] : never;
  type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<ContentEntryMap[C]>['slug'];

  export function getEntryBySlug<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
    collection: C,
    // Note that this has to accept a regular string too, for SSR
    entrySlug: E
  ): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;

  export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
    collection: C,
    entryId: E
  ): Promise<CollectionEntry<C>>;

  export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => entry is E
  ): Promise<E[]>;
  export function getCollection<C extends keyof AnyEntryMap>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => unknown
  ): Promise<CollectionEntry<C>[]>;

  export function getEntry<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(entry: {
    collection: C;
    slug: E;
  }): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C] | (string & {})>(entry: {
    collection: C;
    id: E;
  }): E extends keyof DataEntryMap[C] ? Promise<DataEntryMap[C][E]> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
    collection: C,
    slug: E
  ): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C] | (string & {})>(
    collection: C,
    id: E
  ): E extends keyof DataEntryMap[C] ? Promise<DataEntryMap[C][E]> : Promise<CollectionEntry<C> | undefined>;

  /** Resolve an array of entry references from the same collection */
  export function getEntries<C extends keyof ContentEntryMap>(
    entries: {
      collection: C;
      slug: ValidContentEntrySlug<C>;
    }[]
  ): Promise<CollectionEntry<C>[]>;
  export function getEntries<C extends keyof DataEntryMap>(
    entries: {
      collection: C;
      id: keyof DataEntryMap[C];
    }[]
  ): Promise<CollectionEntry<C>[]>;

  export function reference<C extends keyof AnyEntryMap>(
    collection: C
  ): import('astro/zod').ZodEffects<
    import('astro/zod').ZodString,
    C extends keyof ContentEntryMap
      ? {
          collection: C;
          slug: ValidContentEntrySlug<C>;
        }
      : {
          collection: C;
          id: keyof DataEntryMap[C];
        }
  >;
  // Allow generic `string` to avoid excessive type errors in the config
  // if `dev` is not running to update as you edit.
  // Invalid collection names will be caught at build time.
  export function reference<C extends string>(
    collection: C
  ): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

  type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
  type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
    ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
  >;

  type ContentEntryMap = {
    docs: {
      'components/Controls/checkbox.md': {
        id: 'components/Controls/checkbox.md';
        slug: 'components/controls/checkbox';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Controls/control-with-label.md': {
        id: 'components/Controls/control-with-label.md';
        slug: 'components/controls/control-with-label';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Controls/radio.md': {
        id: 'components/Controls/radio.md';
        slug: 'components/controls/radio';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Controls/toggle.md': {
        id: 'components/Controls/toggle.md';
        slug: 'components/controls/toggle';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Inputs/input.md': {
        id: 'components/Inputs/input.md';
        slug: 'components/inputs/input';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Inputs/masked-input.md': {
        id: 'components/Inputs/masked-input.md';
        slug: 'components/inputs/masked-input';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Inputs/textarea.md': {
        id: 'components/Inputs/textarea.md';
        slug: 'components/inputs/textarea';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Modals/base-modal.md': {
        id: 'components/Modals/base-modal.md';
        slug: 'components/modals/base-modal';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Modals/info-modal.md': {
        id: 'components/Modals/info-modal.md';
        slug: 'components/modals/info-modal';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Progress/progress-bar-with-title.md': {
        id: 'components/Progress/progress-bar-with-title.md';
        slug: 'components/progress/progress-bar-with-title';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Progress/progress-bar.md': {
        id: 'components/Progress/progress-bar.md';
        slug: 'components/progress/progress-bar';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Progress/range-slider.md': {
        id: 'components/Progress/range-slider.md';
        slug: 'components/progress/range-slider';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Progress/stepper.md': {
        id: 'components/Progress/stepper.md';
        slug: 'components/progress/stepper';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Tabs/tab-button.md': {
        id: 'components/Tabs/tab-button.md';
        slug: 'components/tabs/tab-button';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Tabs/tabs.md': {
        id: 'components/Tabs/tabs.md';
        slug: 'components/tabs/tabs';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Toasts/toast-container.md': {
        id: 'components/Toasts/toast-container.md';
        slug: 'components/toasts/toast-container';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Toasts/toast.md': {
        id: 'components/Toasts/toast.md';
        slug: 'components/toasts/toast';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Typography/subtitle.md': {
        id: 'components/Typography/subtitle.md';
        slug: 'components/typography/subtitle';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Typography/text.md': {
        id: 'components/Typography/text.md';
        slug: 'components/typography/text';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/Typography/title.md': {
        id: 'components/Typography/title.md';
        slug: 'components/typography/title';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/box.md': {
        id: 'components/box.md';
        slug: 'components/box';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/breadcrumbs.md': {
        id: 'components/breadcrumbs.md';
        slug: 'components/breadcrumbs';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/chips.md': {
        id: 'components/chips.md';
        slug: 'components/chips';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/datepicker.md': {
        id: 'components/datepicker.md';
        slug: 'components/datepicker';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/link.md': {
        id: 'components/link.md';
        slug: 'components/link';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/popover.md': {
        id: 'components/popover.md';
        slug: 'components/popover';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/select.md': {
        id: 'components/select.md';
        slug: 'components/select';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/space.md': {
        id: 'components/space.md';
        slug: 'components/space';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'components/theme.md': {
        id: 'components/theme.md';
        slug: 'components/theme';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'index.mdx': {
        id: 'index.mdx';
        slug: 'index';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.mdx'] };
      'introduction/index.md': {
        id: 'introduction/index.md';
        slug: 'introduction';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'resources/index.md': {
        id: 'resources/index.md';
        slug: 'resources';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
      'theming/index.md': {
        id: 'theming/index.md';
        slug: 'theming';
        body: string;
        collection: 'docs';
        data: InferEntrySchema<'docs'>;
      } & { render(): Render['.md'] };
    };
  };

  type DataEntryMap = {};

  type AnyEntryMap = ContentEntryMap & DataEntryMap;

  type ContentConfig = typeof import('../src/content/config');
}
