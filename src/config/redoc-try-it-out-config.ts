import {
  RedocTryItOutOptions,
  DependenciesVersions,
} from "../interfaces/redoc-try-it-out-options.interface";
import { Config } from "./config";
import { InvalidElementError } from "../errors/invalid-element.error";

declare let $: any;

const DEFAULT_REDOC_VERSION = "2.0.0-rc.56";
const DEFAULT_JQUERY_VERSION = "3.6.0";
const DEFAULT_JQUERY_SCROLL_VERSION = "2.1.2";

export class RedocTryItOutConfig implements RedocTryItOutOptions {
  public readonly docUrl: string;
  public readonly element?: HTMLElement;

  private readonly _containerId: string = "redoc-container";
  private readonly _operationBoxSelector: string = "[data-section-id]";

  public readonly tryItOutEnabled: boolean = true;
  public readonly tryItBoxContainerId: string = "try-out-wrapper";
  public readonly redocVersion: string = DEFAULT_REDOC_VERSION;
  public readonly selectedOperationClass: string = "try";

  public readonly dependenciesVersions: DependenciesVersions = {
    jquery: DEFAULT_JQUERY_VERSION,
    jqueryScrollTo: DEFAULT_JQUERY_SCROLL_VERSION,
  };

  public constructor(
    docUrl: string,
    options: RedocTryItOutOptions,
    element?: HTMLElement,
  ) {
    Config.parseOptions(this, options);
    this.docUrl = docUrl;
    this.element = element;
  }

  private get elementId(): string {
    const containerId = $(this.element).attr("id");

    if (!containerId) {
      throw new InvalidElementError("redoc container element must have an id");
    }

    return containerId;
  }

  public get tryItBoxSelector(): string {
    return `#${this.tryItBoxContainerId}`;
  }

  public get version(): string {
    return this.redocVersion;
  }

  public get containerId(): string {
    return this.element ? this.elementId : this._containerId;
  }

  public get containerSelector(): string {
    return `#${this.containerId}`;
  }

  public get operationBoxSelector(): string {
    return `${this.containerSelector} ${this._operationBoxSelector}`;
  }

  public get bundleUrl(): string {
    return `${Config.cdnUrl}/redoc@${this.version}/bundles/redoc.standalone.min.js`;
  }

  public get tryItDependencies(): {
    jqueryUrl: string;
    jqueryScrollToUrl: string;
  } {
    return {
      jqueryUrl: `${Config.cdnUrl}/jquery@${this.dependenciesVersions.jquery}/dist/jquery.min.js`,
      jqueryScrollToUrl: `${Config.cdnUrl}/jquery.scrollto@${this.dependenciesVersions.jqueryScrollTo}/jquery.scrollTo.min.js`,
    };
  }
}
